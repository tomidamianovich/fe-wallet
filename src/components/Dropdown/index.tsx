import React from 'react';
import { CurrencyType } from '../../utils/type';
import './styles/index.scss';

type Props = { 
  name: string,
  ariaLabel: string,
  handler: (e: any) => void,
  options: CurrencyType[],
  selectedIndex: number,
  className?: string
};

const Dropdown: React.FC<Props> = ({ 
  name,
  handler,
  options,
  selectedIndex,
  ariaLabel,
  className
}) => 
  <select 
    name={name} 
    id={name} 
    onChange={handler}
    value={selectedIndex}
    className={`fe-wallet__dropdown ${className}`}
    aria-label={ariaLabel}>
    {options?.map((currency: CurrencyType, index: number) => 
      <option value={index} key={index}>
        { currency.ticker } 
      </option>
    )}
  </select>

export default Dropdown;