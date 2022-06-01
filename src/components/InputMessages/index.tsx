import React from 'react';
import { BalanceType, TransactionActionType, BalanceWithCurrencyInfo } from '../../utils/type';
import { TRANSACTIONS, WORDINGS } from '../../utils/constants';
import './styles/index.scss';

type Props = {
  transactionWipCurrency: BalanceWithCurrencyInfo,
  transactionAmount: string,
  transactionType: TransactionActionType,
  currentBalance: BalanceType
};

const InputMessages: React.FC<Props> = ({
  transactionWipCurrency,
  transactionAmount,
  transactionType,
  currentBalance
}) => {
  const { sell_rate, account_limit } = transactionWipCurrency;
  const isLimitedExceeded = account_limit && parseFloat(transactionAmount) > account_limit;
  const isTransactionAffordable = account_limit && parseFloat(transactionAmount) * parseFloat(sell_rate) > currentBalance.amount;
  const isBuyTransaction = transactionType === TRANSACTIONS.TYPES.BUY;
  const { INSUFFICIENT_AMOUNT, AMOUNT_TO_DEBIT, AMOUNT_NEEDED, ACTUAL_BALANCE} = WORDINGS.BALANCE.DETAIL.INPUT.MESSAGES;
  
  const getTransactionAmountFormatted = (transactionAmount: string, sellRate:string) => {
    const value = parseFloat(transactionAmount) * parseFloat(sellRate);
    return value.toFixed(2);
  }

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
          {INSUFFICIENT_AMOUNT}
        </span> 
      }
      { isBuyTransaction && sell_rate && currentBalance?.ticker && transactionAmount && !isTransactionAffordable &&
        <p className="fe-wallet__input__messages__text">
          {AMOUNT_TO_DEBIT}: ${currentBalance?.ticker} {total}
        </p> 
      }
      { isBuyTransaction && sell_rate && currentBalance?.ticker && transactionAmount && isTransactionAffordable &&
        <p className="fe-wallet__input__messages__text">
          {AMOUNT_NEEDED}: { isBuyTransaction ? currentBalance?.ticker : ""} {total}
        </p> 
      }
      {  transactionWipCurrency?.amount &&
        <p className="fe-wallet__input__messages__text">
          {ACTUAL_BALANCE}: {transactionWipCurrency?.ticker} {transactionWipCurrency?.amount}
        </p> 
      }
    </div>
  )
}
export default InputMessages;
