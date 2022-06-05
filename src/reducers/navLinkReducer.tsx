import * as actionTypes from '../actionTypes/NavLinkType'
import { CurrencyAction, NavLinkState } from '../utils/type'
import { NAV_LINKS } from '../utils/constants'

const initialState: NavLinkState = NAV_LINKS

const reducer = (
    state: NavLinkState = initialState,
    action: CurrencyAction,
): NavLinkState => {
    switch (action.type) {
        case actionTypes.SET_NAV_LINKS:
            const navLinks: NavLinkState = action.payload
            return navLinks
    }
    return state
}

export default reducer
