import * as actionTypes from "../actionTypes/BalanceType"
import { BalanceType, BalanceAction } from '../utils/type'

const initialState:BalanceType[] = []

const reducer = (
  state: BalanceType[] = initialState,
  action: BalanceAction
): BalanceType[] => {
  switch (action.type) {
    case actionTypes.SET_BALANCE:
      const balances:BalanceType[] = action.payload
      return balances;
  }
  return state
}

export default reducer
