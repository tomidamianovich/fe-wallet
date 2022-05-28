import * as actionTypes from "../actionTypes/BalanceType"
import { BalanceType, CurrentBalanceAction } from '../utils/type'

const initialState:BalanceType = {
  ticker: "",
  amount: 0,
  account_limit: 0
};

const reducer = (
  state: BalanceType = initialState,
  action: CurrentBalanceAction
): BalanceType => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_BALANCE:
      const balances:BalanceType = action.payload
      return balances;
  }
  return state
}

export default reducer
