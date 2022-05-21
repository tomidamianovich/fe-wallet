import React from 'react';
import { CurrencyType, RateType } from '../../utils/type';
import './styles/index.scss';

type Props = {
  currencies: CurrencyType[],
  rates: RateType[]
};

const Main: React.FC<Props> = ({
    currencies, 
    rates
  }) => 
    <main className="fe-wallet__main">
      <p> Currencies Amount: {currencies.length}</p>
      <p> Rates Amount: {rates.length}</p>
    </main>
;

export default Main;