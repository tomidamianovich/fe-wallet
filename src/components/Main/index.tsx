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
    const fiatCurrencies = currencies?.filter(currency => currency.type === "FIAT");
    return <main className="fe-wallet__main">
      { 
        (balances?.length && fiatCurrencies?.length)
        ? <Greeting balances={balances} currencies={fiatCurrencies} />
        : null
      }
      { 
        (cryptoCurrencies?.length && rates?.length) 
        ? <Converter currencies={cryptoCurrencies} rates={rates} />
        : null
      }
    </main>
  }
;

export default Main;