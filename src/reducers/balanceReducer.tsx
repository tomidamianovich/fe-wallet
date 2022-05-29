import * as actionTypes from "../actionTypes/BalanceType"
import { BalanceState, BalanceAction } from '../utils/type'

const initialState:BalanceState = []

const reducer = (
  state: BalanceState = initialState,
  action: BalanceAction
): BalanceState => {
  switch (action.type) {
    case actionTypes.SET_BALANCE:
      const balances:BalanceState = action.payload
      return balances;
  }
  return state
}

export default reducer
