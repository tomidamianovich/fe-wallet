import React, { useState } from 'react';
import { useEffect } from 'react';
import { BalanceType, CurrencyType, RateType, CombinedState, TransactionActionType } from '../../utils/type';
import { useDispatch, useSelector } from 'react-redux';
import BalanceDetailCard from '../BalanceDetailCard';
import Modal from "../Modal"
import './styles/index.scss';
import { TRANSACTIONS, DEFAULT_BALANCE, COMISIONS } from '../../utils/constants';
import { addTransaction } from "../../actions/transactionAction";

type Props = {
  balances: BalanceType[],
  currencies: CurrencyType[],
  rates: RateType[]
};

type BalanceWithCurrencyInfo = BalanceType & CurrencyType & { sell_rate: string } ;

const BalanceDetail: React.FC<Props> = ({
  balances,
  currencies,
  rates
}) => {
  const currentBalance:BalanceType  = useSelector((state:CombinedState) => state.CurrentBalanceReducer);
  const [cryptosBalance, setCryptosBalance] = useState<BalanceWithCurrencyInfo[]>();
  const [transactionWipCurrency, setTransactionWipCurrency] = useState<BalanceWithCurrencyInfo>(DEFAULT_BALANCE);
  const [transactionType, setTransactionType] = useState<TransactionActionType>(TRANSACTIONS.TYPES.BUY);
  const [transactionAmount, setTransactionAmount] = useState<string>("");
  const [headerLabel, setHeaderLabel] = useState<string>("");
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(()=> {
    const cryptoTickers = currencies?.map(currency => currency.ticker);
    const cryptosBalance = balances?.reduce((acc:BalanceWithCurrencyInfo[], val: BalanceType) => {
      if (!(cryptoTickers.includes(val.ticker) && !!val.amount)) return acc
      const currencyData:CurrencyType = currencies?.filter(currency => currency.ticker === val.ticker)[0];
      const { sell_rate } = rates.find(rate => rate.ticker === `${val.ticker}_${currentBalance?.ticker}`) ?? {sell_rate: "0"};
      acc.push({
        ...val, 
        ...currencyData,
        sell_rate
      });
      return acc 
    }, []);
    setCryptosBalance(cryptosBalance);
  }, [setCryptosBalance, balances, currencies, rates, currentBalance]);

  const handlePurchase = () => {
    const { ticker, sell_rate } = transactionWipCurrency;
    const comision = COMISIONS[transactionType];
    const amount = parseFloat(transactionAmount);
    let total = (transactionType === TRANSACTIONS.TYPES.BUY)
      ? amount *  parseFloat(sell_rate) 
      :  amount;
    total -= comision;
    
    const newTransaction = [{
      date: new Date(Date.now()),
      action: transactionType,
      ticker,
      via: "APP",
      status: TRANSACTIONS.STATUS.SUCCESS,
      comision,
      amount,
      total
    }];

    dispatch(addTransaction(newTransaction));
    handleModalVisibility();
    modalVisibility && handleResetModalState();
  };

  const handleTransaction = (balance: BalanceWithCurrencyInfo) => {
    setTransactionWipCurrency(balance);
    handleHeaderLabel(balance, transactionType);
    handleModalVisibility();
  };
  
  const handleHeaderLabel = (balance: BalanceWithCurrencyInfo, type: TransactionActionType ) => {
    const {name, ticker} = balance;
    setHeaderLabel(`${TRANSACTIONS.TYPES_TITLES[type]} de ${name} (${ticker})`);
  }

  const handleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
    modalVisibility && handleResetModalState();
  };

  const handleResetModalState = () => setTransactionAmount("0");

  const handlerTransactionAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e?.target;
    if (!value.match(/^[0-9]*\.?[0-9]*$/) || value === ".") return
    setTransactionAmount(value);
  }

  const getTransactionAmountFormatted = (transactionAmount: string, sellRate:string) => {
    const value = parseFloat(transactionAmount) * parseFloat(sellRate);
    return value.toFixed(2);
  }
  
  const InputMessages: Function = (): JSX.Element => {
    const { sell_rate, account_limit } = transactionWipCurrency;
    const isLimitedExceeded = account_limit && parseFloat(transactionAmount) > account_limit;
    const isTransactionAffordable = account_limit && parseFloat(transactionAmount) * parseFloat(sell_rate) > currentBalance.amount;
    const isBuyTransaction = transactionType === TRANSACTIONS.TYPES.BUY;
    const total = isBuyTransaction 
      ? getTransactionAmountFormatted(transactionAmount, sell_rate)
      : transactionAmount;
    return (
      <div className="fe-wallet__input__messages">
        { isLimitedExceeded && !isTransactionAffordable &&
          <span className="fe-wallet__input__messages__text--warning">
            {isBuyTransaction ? "Limite excedido" : "Monto no disponible"}
          </span> 
        }
        { isTransactionAffordable && isBuyTransaction &&
          <span className="fe-wallet__input__messages__text--warning">
            Dinero insuficiente
          </span> 
        }
        { isBuyTransaction && sell_rate && currentBalance?.ticker && transactionAmount && !isTransactionAffordable &&
          <p className="fe-wallet__input__messages__text">
            Monto a debitar: ${currentBalance?.ticker} {total}
          </p> 
        }
        { isBuyTransaction && sell_rate && currentBalance?.ticker && transactionAmount && isTransactionAffordable &&
          <p className="fe-wallet__input__messages__text">
            Monto necesario: { isBuyTransaction ? currentBalance?.ticker : ""} {total}
          </p> 
        }
        {  transactionWipCurrency?.amount &&
          <p className="fe-wallet__input__messages__text">
            Monto actual: {transactionWipCurrency?.ticker} {transactionWipCurrency?.amount}
          </p> 
        }
      </div>
    )
  }

  const handlerDropdown = (e: any) => {
    setTransactionType(e.target.value);
    handleHeaderLabel(transactionWipCurrency, e.target.value);
  };

  const isPurchaseActionDisabled = () => {
    const amountParsed = parseFloat(transactionAmount);
    const amountIsZero = !transactionAmount || amountParsed === 0;
    const isAccountLimitExceeded = amountParsed > transactionWipCurrency?.account_limit;
    switch (transactionType) {
      case TRANSACTIONS.TYPES.BUY:
        const total = (amountParsed * parseFloat(transactionWipCurrency?.sell_rate) > currentBalance?.amount);
        return amountIsZero || isAccountLimitExceeded || total;
      case TRANSACTIONS.TYPES.WITHDRAWAL:
      case TRANSACTIONS.TYPES.SEND:
        return amountIsZero || isAccountLimitExceeded
      default:
        return amountIsZero
    }
  }

  const ModalContent: Function = (): JSX.Element => 
    <div className="fe-wallet__input">
      <div className="fe-wallet__input__transaction">
        <span className="fe-wallet__input__transaction__label">
          Seleccione el tipo de operacion a realizar:
        </span>
        <select
          name="transaction_type"
          id="transaction_type"
          onChange={handlerDropdown}
          value={transactionType}
          className="fe-wallet__dropdown">
            {Object.entries(TRANSACTIONS.TYPES_TITLES).map(([key, value]) => 
              <option value={key}>
                {value}
              </option>
            )}
        </select>
      </div>
      <p className="fe-wallet__input__label">
        Ingrese cantidad:
      </p>
      <input
        type="string" 
        name="transaction_amount"
        autoFocus={true}
        value={transactionAmount}
        onChange={handlerTransactionAmount}
        aria-label="Monto de la transacción"
        className="fe-wallet__input__amount"
      />
      { (transactionWipCurrency && transactionAmount) ? <InputMessages /> : null}
    </div>

  return(
    <div className="fe-wallet__balance-detail">
      { cryptosBalance?.map(balance =>
        <BalanceDetailCard
          key={balance.ticker}
          handleAction={() => handleTransaction(balance)}
          {...balance}
        />
      )}
      { modalVisibility && 
        <Modal 
          handleCloseButton={handleModalVisibility} 
          header={headerLabel}
          content={<ModalContent />}
          actions={[{
            label:"Cancelar",
            ariaLabel:"Cancelar transacción",
            handler: handleModalVisibility
          },
          {
            label:"Confirmar",
            ariaLabel:"Confirmar transacción",
            handler: handlePurchase,
            disabled: isPurchaseActionDisabled()
          }]}
        />
      }
    </div>
  )
};

export default BalanceDetail;