import React from 'react';
import './styles/index.scss';
import MaintenancePage from "../../components/MaintenancePage";

type Props = {};

const MarketRates: React.FC<Props> = () => 
  <div className="fe-wallet__market-rates">
    <MaintenancePage pageName="market-rates" />
  </div>
;

export default MarketRates;