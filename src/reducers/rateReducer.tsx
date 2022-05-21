import * as actionTypes from "../actionTypes/RateType"
import { RateType, RateAction } from '../utils/type'

const initialState:RateType[] = []

const reducer = (
  state: RateType[] = initialState,
  action: RateAction
): RateType[] => {
  switch (action.type) {
    case actionTypes.SET_RATE:
      const rates:RateType[] = action.payload;
      return rates;
  }
  return state
}

export default reducer
