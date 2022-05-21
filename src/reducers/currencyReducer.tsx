import * as actionTypes from "../actionTypes/CurrencyType"
import { CurrencyType, CurrencyAction } from '../utils/type'

const initialState:CurrencyType[] = []

const reducer = (
  state: CurrencyType[] = initialState,
  action: CurrencyAction
): CurrencyType[] => {
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      const currencies:CurrencyType[] = action.payload
      return currencies;
  }
  return state
}

export default reducer
