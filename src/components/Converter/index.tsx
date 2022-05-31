import React, { useState } from 'react';
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
              name="from"
              handler={handlerFromCurrency} 
              options={currencies} 
              selectedIndex={fromCurrencyIndex} 
              ariaLabel={"Seleccionar crypto origen"}
            />
          }
          <input 
            type="number" 
            className="fe-wallet__converter__input"
            name="from_amount" 
            onChange={handlerFromAmount} 
            defaultValue={0} 
            aria-label="Cripto a convertir"
          />
        </div>
        <div className="fe-wallet__converter__icon">
          <Icon icon="arrow-right" width={24} height={16}/>
        </div>
        <div className="fe-wallet__converter__crypto">
          {currencies && 
            <Dropdown 
              name="to" 
              handler={handlerToCurrency} 
              options={currencies} 
              selectedIndex={toCurrencyIndex} 
              ariaLabel={"Seleccionar crypto destino"}
            />
          }
          <input 
            type="number"
            className="fe-wallet__converter__input"
            name="to_amount" 
            value={result} 
            readOnly 
            aria-label="Cripto convertida"
          />
        </div>
        <button 
          onClick={handlerConversion} 
          aria-label="Convertir"
          className='fe-wallet__converter__submit'
        >
          Convertir
        </button>
      </div>  
    )
  }
;

export default Converter;