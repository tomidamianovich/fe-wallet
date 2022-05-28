import {  SET_CURRENT_BALANCE } from '../actionTypes/BalanceType'
import { BalanceType, CurrentBalanceAction } from '../utils/type'

export function setCurrencyBalanceData(payload: BalanceType) {
  const action: CurrentBalanceAction = {
    type: SET_CURRENT_BALANCE,
    payload
  }
  return action
}