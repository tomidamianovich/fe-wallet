import { combineReducers } from 'redux'
import CurrencyReducer from './currencyReducer'
import RateReducer from './rateReducer'
import NavLinkReducer from './navLinkReducer'
import BalanceReducer from './balanceReducer'
import CurrentBalanceReducer from './currentBalanceReducer'
import TransactionsReducer from './transactionsReducer'

export default combineReducers({
  CurrencyReducer,
  RateReducer,
  NavLinkReducer,
  BalanceReducer,
  CurrentBalanceReducer,
  TransactionsReducer,
})
