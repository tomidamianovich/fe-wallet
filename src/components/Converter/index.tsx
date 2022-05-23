import React, { useState } from 'react';
import { CurrencyType, RateType } from '../../utils/type';
import './styles/index.scss';

type Props = {
  currencies: CurrencyType[],
  rates: RateType[]
};

type DropdownProps = { 
  name: string,
  ariaLabel: string,
  handler: (e: any) => void,
  currencies: CurrencyType[],
  selectedIndex: number
};

const Dropdown: React.FC<DropdownProps> = ({ name, handler, currencies, selectedIndex, ariaLabel }) => 
  <select 
    name={name} 
    id={name} 
    onChange={handler}
    value={selectedIndex} 
    aria-label={ariaLabel}>
    {currencies.map((currency: CurrencyType, index: number) => 
      <option value={index} key={index}>
        { currency.ticker } 
      </option>
    )}
  </select>

const Converter: React.FC<Props> = ({
    currencies, 
    rates
  }) => {
    const [fromCurrencyIndex, setFromCurrencyIndex] = useState<number>(0);
    const [toCurrencyIndex, setToCurrencyIndex] = useState<number>(1);
    const [fromAmount, setFromAmount] = useState<number>(0);
    const [toAmount, setToAmount] = useState<number>(0);
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
    const handlerToAmount = (e: React.ChangeEvent<HTMLInputElement>) => setToAmount(parseInt(e.target.value));

    const handlerConversion = () => {
      const currencyTickerFrom = currencies[fromCurrencyIndex]?.ticker;
      const currencyTickerTo = currencies[toCurrencyIndex]?.ticker;
      if (!currencyTickerFrom || !currencyTickerTo) return
      const [{sell_rate}] = rates.filter(rate => rate.ticker?.includes(currencyTickerFrom) && rate.ticker?.includes('ARS'));
      const [{buy_rate}] = rates.filter(rate => rate.ticker?.includes(currencyTickerTo) && rate.ticker?.includes('ARS'));
      const money = fromAmount * parseInt(sell_rate);
      const result = buy_rate ? money / parseInt(buy_rate) : 0;
      setResult(result);
    };

    return (
      <div className="fe-wallet__converter">
        <>
          <input 
            type="number" 
            name="from_amount" 
            onChange={handlerFromAmount} 
            defaultValue={0} 
            aria-label="Cripto a convertir"
          />
          {currencies && 
            <Dropdown 
              name="from"
              handler={handlerFromCurrency} 
              currencies={currencies} 
              selectedIndex={fromCurrencyIndex} 
              ariaLabel={"Seleccionar crypto origen"}
            />
          }
        </>
        <>
          <input 
            type="number"
            name="to_amount" 
            value={result} 
            readOnly 
            aria-label="Cripto convertida"
          />
          {currencies && 
            <Dropdown 
              name="to" 
              handler={handlerToCurrency} 
              currencies={currencies} 
              selectedIndex={toCurrencyIndex} 
              ariaLabel={"Seleccionar crypto destino"}
            />
          }
        </>
        <button 
          onClick={handlerConversion} 
          aria-label="Convertir"
        >
          Convertir
        </button>
      </div>  
    )
  }
;

export default Converter;