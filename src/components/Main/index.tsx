import React from 'react';
import { CurrencyType, RateType } from '../../utils/type';
import Converter from '../Converter';
import './styles/index.scss';

type Props = {
  currencies: CurrencyType[],
  rates: RateType[]
};

const Main: React.FC<Props> = ({
    currencies, 
    rates
  }) => {
    const cryptoCurrencies = currencies?.filter(currency => currency.type === "CRYPTO");
    return <main className="fe-wallet__main">
      { cryptoCurrencies.length && <Converter currencies={cryptoCurrencies} rates={rates} />}
    </main>
  }
;

export default Main;