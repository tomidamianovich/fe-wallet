import * as actionTypes from "../actionTypes/TransactionType"
import { TransactionsAction, TransactionState } from '../utils/type'

const initialState:TransactionState = [{
  date: new Date(Date.now()),
  action: "WITHDRAWAL",
  ticker: "BTC",
  via: "Mercadopago",
  status: "PENDING",
  comision: 0.3,
  amount: 3000
},
{
  date: new Date(Date.now()),
  action: "DEPOSIT",
  ticker: "ARS",
  via: "BBVA",
  status: "SUCCESS",
  comision: 0.3,
  amount: 10000
},
];

const reducer = (
  state: TransactionState = initialState,
  action: TransactionsAction 
): TransactionState => {
  switch (action.type) {
    case actionTypes.SET_TRANSACTIONS:
      const transactions:TransactionState = action.payload;
      return transactions;
  }
  return state
}

export default reducer
