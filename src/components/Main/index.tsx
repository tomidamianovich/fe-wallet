import React from 'react';
import { CurrencyType, RateType, BalanceType } from '../../utils/type';
import Converter from '../Converter';
import Greeting from '../Greeting';
import './styles/index.scss';

type Props = {
  currencies: CurrencyType[],
  rates: RateType[],
  balances: BalanceType[]
};

const Main: React.FC<Props> = ({
    currencies, 
    rates,
    balances
  }) => {
    const cryptoCurrencies = currencies?.filter(currency => currency.type === "CRYPTO");
    return <main className="fe-wallet__main">
      { balances?.length && <Greeting balances={balances} />}
      { cryptoCurrencies?.length && <Converter currencies={cryptoCurrencies} rates={rates} />}
    </main>
  }
;

export default Main;