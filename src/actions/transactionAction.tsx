import { SET_TRANSACTIONS } from '../actionTypes/TransactionType'
import { TransactionState, TransactionsAction } from '../utils/type'

export function setTransactionsData(payload: TransactionState) {
  const action: TransactionsAction = {
    type: SET_TRANSACTIONS,
    payload
  }
  return action
}