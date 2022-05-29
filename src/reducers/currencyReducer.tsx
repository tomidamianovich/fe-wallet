import * as actionTypes from "../actionTypes/CurrencyType"
import { CurrencyState, CurrencyAction } from '../utils/type'

const initialState:CurrencyState = []

const reducer = (
  state: CurrencyState = initialState,
  action: CurrencyAction
): CurrencyState => {
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      const currencies:CurrencyState = action.payload
      return currencies;
  }
  return state
}

export default reducer
