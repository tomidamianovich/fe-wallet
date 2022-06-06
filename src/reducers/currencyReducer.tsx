import * as actionTypes from '../actionTypes/CurrencyType'
import { CurrencyState, CurrencyAction } from '../utils/type'

const initialState: CurrencyState = []

const reducer = (
  state: CurrencyState = initialState,
  action: CurrencyAction,
): CurrencyState => {
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      return action.payload
  }
  return state
}

export default reducer
