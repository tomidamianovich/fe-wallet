import { SET_CURRENCY } from '../actionTypes/CurrencyType'
import { CurrencyType, CurrencyAction } from '../utils/type'

export function setCurrenciesData(payload: CurrencyType[]) {
  const action: CurrencyAction = {
    type: SET_CURRENCY,
    payload,
  }
  return action
}
