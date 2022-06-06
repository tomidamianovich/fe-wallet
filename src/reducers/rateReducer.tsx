import * as actionTypes from '../actionTypes/RateType'
import { RateAction, RateState } from '../utils/type'

const initialState: RateState = []

const reducer = (
  state: RateState = initialState,
  action: RateAction,
): RateState => {
  switch (action.type) {
    case actionTypes.SET_RATE:
      return action.payload
  }
  return state
}

export default reducer
