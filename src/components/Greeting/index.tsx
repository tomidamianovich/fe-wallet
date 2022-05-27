import React from 'react';
import { BalanceType, CurrencyType } from '../../utils/type';
import './styles/index.scss';
import { PANEL } from '../../utils/constants';
import BalanceSummary from '../BalanceSummary'

type Props = {
  balances: BalanceType[],
  currencies: CurrencyType[]
};

const Greeting: React.FC<Props> = ({
    balances,
    currencies
  }) => {
    const { HEADING, SUBHEADING } = PANEL;
    return (
      <div className="fe-wallet__greeting">
        <div className="fe-wallet__greeting__heading">
          <h2 className="fe-wallet__greeting__heading__main">{ HEADING }</h2>
          <h5 className="fe-wallet__greeting__heading__sub">{ SUBHEADING }</h5>
        </div>
        <div className="fe-wallet__greeting__balance-container">
          <BalanceSummary balances={balances} currencies={currencies} />
        </div>
      </div>  
    )
  }
;

export default Greeting;