import { SET_BALANCE } from '../actionTypes/BalanceType'
import { BalanceType, BalanceAction } from '../utils/type'

export function setBalanceData(payload: BalanceType[]) {
  const action: BalanceAction = {
    type: SET_BALANCE,
    payload
  }
  return action
}