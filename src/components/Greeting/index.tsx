import React from 'react';
import { BalanceType } from '../../utils/type';
import './styles/index.scss';
import { PANEL } from '../../utils/constants';

type Props = {
  balances: BalanceType[]
};

const Greeting: React.FC<Props> = ({
    balances
  }) => {
    const { HEADING, SUBHEADING } = PANEL;
    return (
      <div className="fe-wallet__greeting">
        <div className="fe-wallet__greeting__heading">
          <h2 className="fe-wallet__greeting__heading__main">{ HEADING }</h2>
          <h5 className="fe-wallet__greeting__heading__sub">{ SUBHEADING }</h5>
        </div>
        <div className="fe-wallet__greeting__balance-container">
          { balances.find(balance => balance.ticker === "ARS")?.amount }
        </div>
      </div>  
    )
  }
;

export default Greeting;