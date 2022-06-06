import React, { useState } from 'react';
import { useEffect } from 'react';
import { BalanceType, CurrencyType, RateType, CombinedState, TransactionActionType } from '../../utils/type';
import { useDispatch, useSelector } from 'react-redux';
import BalanceDetailCard from '../BalanceDetailCard';
import InputMessages from '../InputMessages';
import Modal from "../Modal"
import './styles/index.scss';
import { TRANSACTIONS, DEFAULT_BALANCE, COMISIONS } from '../../utils/constants';
import { addTransaction } from "../../actions/transactionAction";
import { withTranslation, WithTranslation } from 'react-i18next';

type Props = {
  balances: BalanceType[],
  currencies: CurrencyType[],
  rates: RateType[]
} & WithTranslation;

type BalanceWithCurrencyInfo = BalanceType & CurrencyType & { sell_rate: string } ;

/*

  Component Name: BalanceDetail
  Usages: 
    - Component that show balance detail.
    - Generates the content needed to be showed in the modal for transacctions.

*/

const BalanceDetail: React.FC<Props> = ({
  balances,
  currencies,
  rates,
  t
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

  const ModalContent: React.FC = (): JSX.Element => 
    <div className="fe-wallet__input">
      <div className="fe-wallet__input__transaction">
        <span className="fe-wallet__input__transaction__label">
          {t('balance.detail.input.labels.transaction')}
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
        {t('balance.detail.input.labels.amount')}
      </p>
      <input
        type="string" 
        name="transaction_amount"
        autoFocus={true}
        value={transactionAmount}
        onChange={handlerTransactionAmount}
        aria-label={t('balance.detail.input.labels.aria_label')}
        className="fe-wallet__input__amount"
      />
      { (transactionWipCurrency && transactionAmount) 
        ? <InputMessages 
          transactionWipCurrency={transactionWipCurrency}
          transactionType={transactionType}
          transactionAmount={transactionAmount}
          currentBalance={currentBalance}
        /> 
        : null}
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
            label: t('balance.actions.cancel.label'),
            ariaLabel: t('balance.actions.cancel.aria_label'),
            handler: handleModalVisibility
          },
          {
            label: t('balance.actions.confirm.aria_label'),
            ariaLabel: t('balance.actions.confirm.aria_label'),
            handler: handlePurchase,
            disabled: isPurchaseActionDisabled()
          }]}
        />
      }
    </div>
  )
};

export default withTranslation()(BalanceDetail);