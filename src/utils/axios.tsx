import { BalanceType, CurrencyType, RateType, endpoint } from "../utils/type";
const axios = require('axios').default;

type responseType = {
  data: RateType[] | CurrencyType[] | BalanceType[]
}

const requestHandler = async (url:string, endpointOrigin: endpoint): Promise<any> => {
  const { BASE_URL, EXT } = endpointOrigin;
  return new Promise((resolve, reject) => 
    axios.get(`${BASE_URL}${url}${EXT}`)
      .then((response: responseType) => resolve(response?.data))
      .catch((err:any) => reject(err))
  );
};

export {
  requestHandler,
}