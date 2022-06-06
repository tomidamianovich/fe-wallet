import { BalanceType, CurrencyType, RateType } from '../utils/type'
import { ENDPOINTS } from '../utils/constants'
import axios from 'axios'

type responseTypeVal = RateType[] | CurrencyType[] | BalanceType[]

type responseType = {
  data: responseTypeVal
}

const requestHandler = async (
  url: string,
): Promise<RateType[] | CurrencyType[] | BalanceType[]> => {
  const { BASE_URL, EXT } = ENDPOINTS
  return new Promise((resolve, reject) =>
    axios
      .get(`${BASE_URL}${url}${EXT}`)
      .then((response: responseType) => resolve(response?.data))
      .catch((err: string) => reject(err)),
  )
}

export { requestHandler }
