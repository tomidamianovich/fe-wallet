import { BalanceType, CurrencyType, RateType } from "../utils/type";
import { ENDPOINTS } from "../utils/constants";
const axios = require('axios').default;

type responseType = {
  data: RateType[] | CurrencyType[] | BalanceType[]
}
  
const requestHandler = async (url:string): Promise<any> => {
  const { BASE_URL, EXT } = ENDPOINTS;
  return new Promise((resolve, reject) => 
    axios.get(`${BASE_URL}${url}${EXT}`)
      .then((response: responseType) => resolve(response?.data))
      .catch((err:any) => reject(err))
  );
};

export {
  requestHandler,
}