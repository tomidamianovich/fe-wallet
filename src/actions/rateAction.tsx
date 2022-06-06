import { SET_RATE } from '../actionTypes/RateType'
import { RateType, RateAction } from '../utils/type'

export function setRatesData(payload: RateType[]) {
  const action: RateAction = {
    type: SET_RATE,
    payload,
  }
  return action
}
