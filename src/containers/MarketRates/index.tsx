import React from 'react';
import './styles/index.scss';
import { WORDINGS } from "../../utils/constants";
import MaintenancePage from "../../components/MaintenancePage";

type Props = {};

const MarketRates: React.FC<Props> = () => 
  <div className="fe-wallet__market-rates">
    <MaintenancePage pageName={WORDINGS.PAGES.MARKET_RATES} />
  </div>
;

export default MarketRates;