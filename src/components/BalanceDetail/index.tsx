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
    debugger
    const newTransaction = [{
      date: new Date(Date.now()),
      action: transactionType,
      ticker,
      via: "APP",
      status: TRANSACTIONS.STATUS.SUCCESS,
      comision: COMISIONS.BUY,
      amount: parseFloat(transactionAmount),
      total: parseFloat(transactionAmount) *  parseFloat(sell_rate) + COMISIONS.BUY
    }];
    dispatch(addTransaction(newTransaction));
    setModalVisibility(!modalVisibility);
    modalVisibility && handleResetModalState();
  };

  const handleTransaction = (balance: BalanceWithCurrencyInfo, type: TransactionActionType) => {
    setTransactionWipCurrency(balance);
    setTransactionType(type);
    setHeaderLabel(`${TRANSACTIONS.TYPES_TITLES[type]} de ${balance.name} (${balance.ticker})`);
    setModalVisibility(!modalVisibility);
  };

  const handleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
    modalVisibility && handleResetModalState();
  };

  const handleResetModalState = () => setTransactionAmount("0");

  const handlerTransactionAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e?.target;
    var rgx = /^[0-9]*\.?[0-9]*$/;
    if (!value.match(rgx) || value === ".") return
    setTransactionAmount(value);
  }

  const getTransactionAmountFormatted = (ticker: string, transactionAmount: string, sellRate:string) => {
    const value = parseFloat(transactionAmount) * parseFloat(sellRate);
    return `${ticker} ${value.toFixed(2)}`;
  }
  
  const InputMessages: Function = (): JSX.Element => {
    const { sell_rate, account_limit } = transactionWipCurrency;
    const isLimitedExceeded = account_limit && parseFloat(transactionAmount) > account_limit;
    const isTransactionAffordable = account_limit && parseFloat(transactionAmount) * parseFloat(sell_rate) > currentBalance.amount;
    return (
      <div className="fe-wallet__input__messages">
        { isLimitedExceeded && !isTransactionAffordable &&
          <span className="fe-wallet__input__messages__text--warning">
            Limite excedido
          </span> 
        }
        { isTransactionAffordable && 
          <span className="fe-wallet__input__messages__text--warning">
            Dinero insuficiente
          </span> 
        }
        { sell_rate && currentBalance?.ticker && transactionAmount &&
          <p className="fe-wallet__input__messages__text">
            Monto a debitar: {getTransactionAmountFormatted(currentBalance?.ticker, transactionAmount, sell_rate)}
          </p> 
        }
      </div>
    )
  }

  const ModalContent: Function = (): JSX.Element => 
    <div className="fe-wallet__input">
      <input
        type="string" 
        name="transaction_amount"
        autoFocus={true}
        value={transactionAmount}
        onChange={handlerTransactionAmount}
        aria-label="Monto de la transacción"
      />
      { (transactionWipCurrency && transactionAmount) ? <InputMessages /> : null}
    </div>

  return(
    <div className="fe-wallet__balance-detail">
      { cryptosBalance?.map(balance =>
        <BalanceDetailCard
          key={balance.ticker}
          handleModalVisibility={() => handleTransaction(balance, TRANSACTIONS?.TYPES?.BUY)} 
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
            disabled: !transactionAmount || 
              (parseFloat(transactionAmount) > transactionWipCurrency?.account_limit) ||
              (parseFloat(transactionAmount) * (parseFloat(transactionWipCurrency?.sell_rate)) > currentBalance?.amount)
          }]}
        />
      }
    </div>
  )
};

export default BalanceDetail;