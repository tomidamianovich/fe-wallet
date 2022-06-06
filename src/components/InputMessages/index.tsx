import React from 'react'
import {
  BalanceType,
  TransactionActionType,
  BalanceWithCurrencyInfo,
} from '../../utils/type'
import { TRANSACTIONS } from '../../utils/constants'
import { withTranslation, WithTranslation } from 'react-i18next'
import './styles/index.scss'

type Props = {
  transactionWipCurrency: BalanceWithCurrencyInfo
  transactionAmount: string
  transactionType: TransactionActionType
  currentBalance: BalanceType
} & WithTranslation

/*

  Component Name: InputMessages
  Usages: 
    - Component that allow using a input html component with extra features
    - Type and errors handler for select element

*/

const InputMessages: React.FC<Props> = ({
  transactionWipCurrency,
  transactionAmount,
  transactionType,
  currentBalance,
  t,
}) => {
  const { sell_rate, account_limit } = transactionWipCurrency
  const isLimitedExceeded =
    account_limit && parseFloat(transactionAmount) > account_limit
  const isTransactionAffordable =
    account_limit &&
    parseFloat(transactionAmount) * parseFloat(sell_rate) >
      currentBalance.amount
  const isBuyTransaction = transactionType === TRANSACTIONS.TYPES.BUY

  const getTransactionAmountFormatted = (
    transactionAmount: string,
    sellRate: string,
  ) => {
    const value = parseFloat(transactionAmount) * parseFloat(sellRate)
    return value.toFixed(2)
  }

  const total = isBuyTransaction
    ? getTransactionAmountFormatted(transactionAmount, sell_rate)
    : transactionAmount

  return (
    <div className="fe-wallet__input__messages">
      {isLimitedExceeded && !isTransactionAffordable && (
        <span className="fe-wallet__input__messages__text--warning">
          {isBuyTransaction ? 'Limite excedido' : 'Monto no disponible'}
        </span>
      )}
      {isTransactionAffordable && isBuyTransaction && (
        <span className="fe-wallet__input__messages__text--warning">
          {t('balance.detail.input.labels.messages.insufficient_amount')}
        </span>
      )}
      {isBuyTransaction &&
        sell_rate &&
        currentBalance?.ticker &&
        transactionAmount &&
        !isTransactionAffordable && (
          <p className="fe-wallet__input__messages__text">
            {t('balance.detail.input.labels.messages.amount_to_debit')}: $
            {currentBalance?.ticker} {total}
          </p>
        )}
      {isBuyTransaction &&
        sell_rate &&
        currentBalance?.ticker &&
        transactionAmount &&
        isTransactionAffordable && (
          <p className="fe-wallet__input__messages__text">
            {t('balance.detail.input.labels.messages.amount_needed')}:{' '}
            {isBuyTransaction ? currentBalance?.ticker : ''} {total}
          </p>
        )}
      {transactionWipCurrency?.amount && (
        <p className="fe-wallet__input__messages__text">
          {t('balance.detail.input.labels.messages.actual_balance')}:{' '}
          {transactionWipCurrency?.ticker} {transactionWipCurrency?.amount}
        </p>
      )}
    </div>
  )
}
export default withTranslation()(InputMessages)
