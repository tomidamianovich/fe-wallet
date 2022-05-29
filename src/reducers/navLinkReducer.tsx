import * as actionTypes from "../actionTypes/NavLinkType"
import { CurrencyAction, NavLinkState } from '../utils/type';
import NavLinks from '../utils/store/links';

const initialState:NavLinkState= NavLinks;

const reducer = (
  state: NavLinkState= initialState,
  action: CurrencyAction
): NavLinkState=> {
  switch (action.type) {
    case actionTypes.SET_NAV_LINKS:
      const navLinks:NavLinkState= action.payload
      return navLinks;
  }
  return state
}

export default reducer
