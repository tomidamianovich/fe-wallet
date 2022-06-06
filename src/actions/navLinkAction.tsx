import { SET_NAV_LINKS } from '../actionTypes/NavLinkType'
import { NavLinkType, NavLinkAction } from '../utils/type'

export function setNavLinks(payload: NavLinkType[]) {
  const action: NavLinkAction = {
    type: SET_NAV_LINKS,
    payload,
  }
  return action
}
