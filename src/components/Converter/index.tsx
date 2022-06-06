import React, { useState } from 'react';
import { CurrencyType, RateType } from '../../utils/type';
import Dropdown from '../Dropdown';
import Icon from '../Icon';
import { withTranslation, WithTranslation } from 'react-i18next';
import './styles/index.scss';

type Props = {
  currencies: CurrencyType[],
  rates: RateType[]
} & WithTranslation;

/*

  Component Name: Converter
  Usages: 
    - Component that allow a user to convert between currencies values.
    - Component that allow a user to know fees in advanced before a purchase or swap.

*/

const Converter: React.FC<Props> = ({
    currencies, 
    rates,
    t
  }) => {
    const [fromCurrencyIndex, setFromCurrencyIndex] = useState<number>(0);
    const [toCurrencyIndex, setToCurrencyIndex] = useState<number>(1);
    const [fromAmount, setFromAmount] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const handlerFromCurrency = (e: React.ChangeEvent<HTMLInputElement>) =>  {
      const currencyIndex = parseInt(e.target.value);
      setFromCurrencyIndex(currencyIndex);
    };

    const handlerToCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currencyIndex = parseInt(e.target.value);
      setToCurrencyIndex(currencyIndex);
    };

    const handlerFromAmount = (e: React.ChangeEvent<HTMLInputElement>) => setFromAmount(parseInt(e.target.value));

    const handlerConversion = () => {
      const currencyTickerFrom = currencies[fromCurrencyIndex]?.ticker;
      const currencyTickerTo = currencies[toCurrencyIndex]?.ticker;
      if (!currencyTickerFrom || !currencyTickerTo) return
      const [{sell_rate}] = rates?.filter(rate => rate.ticker?.includes(currencyTickerFrom) && rate.ticker?.includes('ARS'));
      const [{buy_rate}] = rates?.filter(rate => rate.ticker?.includes(currencyTickerTo) && rate.ticker?.includes('ARS'));
      const money = fromAmount * parseInt(sell_rate);
      const result = buy_rate ? money / parseInt(buy_rate) : 0;
      setResult(result);
    };

    return (
      <div className="fe-wallet__converter">
        <div className="fe-wallet__converter__crypto">
          {currencies && 
            <Dropdown 
              name={t('converter.from.dropdown.name')}
              handler={handlerFromCurrency} 
              options={currencies} 
              selectedIndex={fromCurrencyIndex} 
              ariaLabel={t('converter.from.dropdown.aria_label')}
            />
          }
          <input 
            type="number" 
            className="fe-wallet__converter__input"
            name={t('converter.from.input.name')}
            onChange={handlerFromAmount} 
            defaultValue={0} 
            aria-label={t('converter.from.input.aria_label')}
          />
        </div>
        <div className="fe-wallet__converter__icon">
          <Icon icon="arrow-right" width={24} height={16}/>
        </div>
        <div className="fe-wallet__converter__crypto">
          {currencies && 
            <Dropdown 
              name={t('converter.to.dropdown.name')}
              handler={handlerToCurrency} 
              options={currencies} 
              selectedIndex={toCurrencyIndex} 
              ariaLabel={t('converter.to.dropdown.aria_label')}
            />
          }
          <input 
            type="number"
            className="fe-wallet__converter__input"
            name={t('converter.to.input.name')}
            value={result} 
            readOnly 
            aria-label={t('converter.to.input.aria_label')}
          />
        </div>
        <button 
          onClick={handlerConversion} 
          aria-label={t('converter.button.aria_label')}
          className='fe-wallet__converter__submit'
        >
          {t('converter.button.label')}
        </button>
      </div>  
    )
  }
;

export default withTranslation()(Converter);