import React, { useState } from 'react';
import { WORDINGS } from '../../utils/constants';
import { CurrencyType, RateType } from '../../utils/type';
import Dropdown from '../Dropdown';
import Icon from '../Icon';
import './styles/index.scss';

type Props = {
  currencies: CurrencyType[],
  rates: RateType[]
};

const Converter: React.FC<Props> = ({
    currencies, 
    rates
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
              name={WORDINGS.CONVERTER.FROM.DROPDOWN.NAME}
              handler={handlerFromCurrency} 
              options={currencies} 
              selectedIndex={fromCurrencyIndex} 
              ariaLabel={WORDINGS.CONVERTER.FROM.DROPDOWN.ARIA_LABEL}
            />
          }
          <input 
            type="number" 
            className="fe-wallet__converter__input"
            name={WORDINGS.CONVERTER.FROM.INPUT.NAME}
            onChange={handlerFromAmount} 
            defaultValue={0} 
            aria-label={WORDINGS.CONVERTER.FROM.INPUT.ARIA_LABEL}
          />
        </div>
        <div className="fe-wallet__converter__icon">
          <Icon icon="arrow-right" width={24} height={16}/>
        </div>
        <div className="fe-wallet__converter__crypto">
          {currencies && 
            <Dropdown 
              name={WORDINGS.CONVERTER.TO.DROPDOWN.NAME}
              handler={handlerToCurrency} 
              options={currencies} 
              selectedIndex={toCurrencyIndex} 
              ariaLabel={WORDINGS.CONVERTER.TO.DROPDOWN.ARIA_LABEL}
            />
          }
          <input 
            type="number"
            className="fe-wallet__converter__input"
            name={WORDINGS.CONVERTER.TO.INPUT.NAME}
            value={result} 
            readOnly 
            aria-label={WORDINGS.CONVERTER.TO.INPUT.ARIA_LABEL}
          />
        </div>
        <button 
          onClick={handlerConversion} 
          aria-label={WORDINGS.CONVERTER.BUTTON.ARIA_LABEL}
          className='fe-wallet__converter__submit'
        >
          {WORDINGS.CONVERTER.BUTTON.LABEL}
        </button>
      </div>  
    )
  }
;

export default Converter;