import React, { useState } from 'react';
import { useEffect } from 'react';
import { BalanceType, CurrencyType, CombinedState } from '../../utils/type';
import './styles/index.scss';
import Dropdown from '../Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrencyBalanceData } from "../../actions/currencyBalanceAction";
import { WORDINGS } from '../../utils/constants';

type Props = {
  balances: BalanceType[],
  currencies: CurrencyType[]
};

const BalanceSummary: React.FC<Props> = ({
  balances,
  currencies
}) => {
  const dispatch = useDispatch();
  const currentBalance:BalanceType  = useSelector((state:CombinedState) => state.CurrentBalanceReducer);
  const [currentCurrencyIndex, setCurrentCurrencyIndex] = useState<number>(0);

  useEffect(()=> {
    if (!currentBalance?.ticker) {
      dispatch(setCurrencyBalanceData(balances[0]));
      return
    } 
    const currencyIndex = currencies.findIndex(currency => currency.ticker === currentBalance.ticker);
    currencyIndex >= 0 && setCurrentCurrencyIndex(currencyIndex);
  }, [currentBalance,currencies, balances, dispatch]);


  const handlerDropdown = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currencyIndex = parseInt(e.target.value);
    const balance = balances.find(balance => balance.ticker === currencies[currencyIndex].ticker);
    if (!balance) return
    setCurrentCurrencyIndex(currencyIndex);
    dispatch(setCurrencyBalanceData(balance));
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
        ariaLabel={WORDINGS.BALANCE.SUMMARY.DROPDOWN.ARIA_LABEL}
        className="fe-wallet__dropdown__balance"
      />
    </div>  
)};

export default BalanceSummary;