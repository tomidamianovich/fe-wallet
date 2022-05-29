import * as actionTypes from "../actionTypes/RateType"
import { RateAction, RateState } from '../utils/type'

const initialState:RateState = []

const reducer = (
  state: RateState = initialState,
  action: RateAction
): RateState => {
  switch (action.type) {
    case actionTypes.SET_RATE:
      const rates:RateState = action.payload;
      return rates;
  }
  return state
}

export default reducer
