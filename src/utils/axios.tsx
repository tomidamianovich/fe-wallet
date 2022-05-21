import { RateType, CurrencyType } from '../utils/type';
const axios = require('axios').default;

type responseType = {
  data: RateType[] | CurrencyType[]
}
  
const requestHandler = async (url:string): Promise<any> => 
  new Promise((resolve, reject) => 
    axios.get(url)
    .then((response: responseType) => resolve(response?.data))
    .catch((err:any) => reject(err))
  );

export {
  requestHandler,
}