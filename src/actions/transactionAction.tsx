import { SET_TRANSACTIONS, ADD_TRANSACTION } from '../actionTypes/TransactionType'
import { TransactionState, TransactionsAction } from '../utils/type'

export function setTransactionsData(payload: TransactionState) {
  const action: TransactionsAction = {
    type: SET_TRANSACTIONS,
    payload
  }
  return action
}

export function addTransaction(payload: TransactionState) {
  const action: TransactionsAction = {
    type: ADD_TRANSACTION,
    payload
  }
  return action
}