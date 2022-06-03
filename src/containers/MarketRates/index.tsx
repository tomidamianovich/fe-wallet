import React from 'react';
import './styles/index.scss';
import { withTranslation, WithTranslation } from 'react-i18next';
import MaintenancePage from "../../components/MaintenancePage";

type Props = {} & WithTranslation;

const MarketRates: React.FC<Props> = ({t}) => 
  <div className="fe-wallet__market-rates">
    <MaintenancePage pageName={t('pages.market_rates')} />
  </div>
;

export default withTranslation()(MarketRates);