import * as actionTypes from '../actionTypes/NavLinkType'
import { NavLinkAction, NavLinkState } from '../utils/type'
import { NAV_LINKS } from '../utils/constants'

const initialState: NavLinkState = NAV_LINKS

const reducer = (
  state: NavLinkState = initialState,
  action: NavLinkAction,
): NavLinkState => {
  switch (action.type) {
    case actionTypes.SET_NAV_LINKS:
      return action.payload
  }
  return state
}

export default reducer
