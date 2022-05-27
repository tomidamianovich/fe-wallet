import React, { useState } from 'react';
import { useEffect } from 'react';
import { BalanceType, CurrencyType } from '../../utils/type';
import './styles/index.scss';
import Dropdown from '../Dropdown'

type Props = {
  balances: BalanceType[],
  currencies: CurrencyType[]
};

const BalanceSummary: React.FC<Props> = ({
  balances,
  currencies
}) => {
  const [currentBalance, setCurrentBalance] = useState<BalanceType>(balances[0]);
  const [currentCurrencyIndex, setCurrentCurrencyIndex] = useState<number>(0);

  useEffect(()=> {
    const currencyIndex = currencies.findIndex(currency => currency.ticker === currentBalance.ticker);
    currencyIndex >= 0 && setCurrentCurrencyIndex(currencyIndex);
  }, [currentBalance, currencies]);


  const handlerDropdown = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currencyIndex = parseInt(e.target.value);
    const balance = balances.find(balance => balance.ticker === currencies[currencyIndex].ticker);
    if (!balance) return
    setCurrentCurrencyIndex(currencyIndex);
    setCurrentBalance(balance);
  };

  const getFormattedAmount = (amount: number, decimals: number):string => {
    return (Math.round(amount * 100) / 100).toFixed(decimals);
  }

  return(
    <div className="fe-wallet__balance">
      <span className="fe-wallet__balance__symbol">
        { currencies[currentCurrencyIndex]?.symbol }
      </span>
      <span className="fe-wallet__balance__amount-desc">
        { getFormattedAmount(currentBalance?.amount, currencies[currentCurrencyIndex]?.decimals ) }
      </span>
      <Dropdown
        name="balance" 
        handler={handlerDropdown} 
        options={currencies} 
        selectedIndex={currentCurrencyIndex}
        ariaLabel={"Seleccionar moneda para ver balance"}
        className="fe-wallet__dropdown__balance"
      />
    </div>  
)};

export default BalanceSummary;