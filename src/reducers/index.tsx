import { combineReducers } from 'redux';
import CurrencyReducer from './currencyReducer';
import RateReducer from './rateReducer';
import NavLinkReducer from './navLinkReducer';

export default combineReducers({
  CurrencyReducer,
  RateReducer,
  NavLinkReducer
})
