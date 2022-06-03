import React from 'react';
import { CurrencyType, RateType, BalanceType } from '../../utils/type';
import { CURRENCIES } from '../../utils/constants';
import Converter from '../Converter';
import BalanceDetail from '../BalanceDetail';
import Transaction from '../Transactions';
import Greeting from '../Greeting';
import Spinner from '../../components/Spinner';
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
    const { FIAT, CRYPTO } = CURRENCIES.TYPES;
    const cryptoCurrencies = currencies?.filter(currency => currency.type === CRYPTO);
    const fiatCurrencies = currencies?.filter(currency => currency.type === FIAT);
    return <main className="fe-wallet__main">
      { 
        (balances?.length && fiatCurrencies?.length)
        ? <Greeting balances={balances} currencies={fiatCurrencies} />
        : <Spinner />
      }
      { 
        (cryptoCurrencies?.length && rates?.length) 
        ? <Converter currencies={cryptoCurrencies} rates={rates} />
        : <Spinner />
      }
      { 
        (cryptoCurrencies?.length && balances?.length) 
        ? <BalanceDetail currencies={cryptoCurrencies} balances={balances} rates={rates}/>
        : <Spinner />
      } 
      <Transaction />
    </main>
  }
;

export default Main;