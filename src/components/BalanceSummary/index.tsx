import React, { useState } from 'react';
import { useEffect } from 'react';
import { BalanceType, CurrencyType, CombinedState } from '../../utils/type';
import './styles/index.scss';
import Dropdown from '../Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrencyBalanceData } from "../../actions/currencyBalanceAction";
import { withTranslation, WithTranslation } from 'react-i18next';

type Props = {
  balances: BalanceType[],
  currencies: CurrencyType[]
} & WithTranslation;

/*

  Component Name: BalanceSummary
  Usages: 
    - Component that show balance total in the selected currency.
    - Component that allows a user to switch between fiat currencies.
    - Generates the update of all crypto currencies value with the selected currency.

*/

const BalanceSummary: React.FC<Props> = ({
  balances,
  currencies,
  t
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
        ariaLabel={t('balance.summary.dropdown.aria_label')}
        className="fe-wallet__dropdown__balance"
      />
    </div>  
)};

export default withTranslation()(BalanceSummary);