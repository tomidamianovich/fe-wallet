import React from 'react'
import { CurrencyType, EventSelect } from '../../utils/type'
import './styles/index.scss'
import { withTranslation, WithTranslation } from 'react-i18next'

type Props = {
  name: string
  ariaLabel: string
  handler: (e: EventSelect) => void
  options: CurrencyType[]
  selectedIndex: number
  className?: string
} & WithTranslation

/*

  Component Name: Dropdown
  Usages: 
    - Component that allow using a select html component with extra features
    - Type and errors handler for select element

*/

const Dropdown: React.FC<Props> = ({
  name,
  handler,
  options,
  selectedIndex,
  ariaLabel,
  className,
  t,
}) => (
  <select
    name={t(name)}
    id={t(name)}
    onChange={handler}
    value={selectedIndex}
    className={`fe-wallet__dropdown ${className ?? ''}`}
    aria-label={t(ariaLabel)}
  >
    {options?.map((currency: CurrencyType, index: number) => (
      <option value={index} key={index}>
        {currency.ticker}
      </option>
    ))}
  </select>
)

export default withTranslation()(Dropdown)
