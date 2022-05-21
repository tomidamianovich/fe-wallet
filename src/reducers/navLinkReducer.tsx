import * as actionTypes from "../actionTypes/NavLinkType"
import { NavLinkType, CurrencyAction } from '../utils/type';
import NavLinks from '../utils/store/links';

const initialState:NavLinkType[] = NavLinks;

const reducer = (
  state: NavLinkType[] = initialState,
  action: CurrencyAction
): NavLinkType[] => {
  switch (action.type) {
    case actionTypes.SET_NAV_LINKS:
      const navLinks:NavLinkType[] = action.payload
      return navLinks;
  }
  return state
}

export default reducer
