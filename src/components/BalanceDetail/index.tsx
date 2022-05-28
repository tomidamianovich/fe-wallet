import React, { useState } from 'react';
import { useEffect } from 'react';
import { BalanceType, CurrencyType, RateType, CombinedState } from '../../utils/type';
import { useSelector } from 'react-redux';
import BalanceDetailCard from '../BalanceDetailCard';
import './styles/index.scss';

type Props = {
  balances: BalanceType[],
  currencies: CurrencyType[],
  rates: RateType[]
};

type BalanceWithCurrencyInfo = BalanceType & CurrencyType & { sell_rate: string } ;

const BalanceDetail: React.FC<Props> = ({
  balances,
  currencies,
  rates
}) => {
  const currentBalance:BalanceType  = useSelector((state:CombinedState) => state.CurrentBalanceReducer);
  const [cryptosBalance, setCryptosBalance] = useState<BalanceWithCurrencyInfo[]>([]);

  useEffect(()=> {
    const cryptoTickers = currencies.map(currency => currency.ticker);
    const cryptosBalance = balances.reduce((acc:BalanceWithCurrencyInfo[], val: BalanceType) => {
      if (!(cryptoTickers.includes(val.ticker) && !!val.amount)) return acc
      const currencyData:CurrencyType = currencies.filter(currency => currency.ticker === val.ticker)[0];
      const { sell_rate } = rates.find(rate => rate.ticker === `${val.ticker}_${currentBalance?.ticker}`) ?? {sell_rate: "0"};
      acc.push({
        ...val, 
        ...currencyData,
        sell_rate
      });
      return acc 
    }, []);
    setCryptosBalance(cryptosBalance);
  }, [setCryptosBalance, balances, currencies, rates, currentBalance]);

  return(
    <div className="fe-wallet__balance-detail">
      { cryptosBalance.map(balance => <BalanceDetailCard {...balance} key={balance.ticker} />) }
    </div>
  )
};

export default BalanceDetail;