import * as actionTypes from '../actionTypes/BalanceType'
import { BalanceState, BalanceAction } from '../utils/type'

const initialState: BalanceState = []

const reducer = (
  state: BalanceState = initialState,
  action: BalanceAction,
): BalanceState => {
  switch (action.type) {
    case actionTypes.SET_BALANCE:
      return action.payload
  }
  return state
}

export default reducer
