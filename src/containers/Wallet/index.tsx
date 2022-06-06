import React from 'react';
import MaintenancePage from '../../components/MaintenancePage';
import { withTranslation, WithTranslation } from 'react-i18next';
import './styles/index.scss';
type Props = WithTranslation;

const Wallet: React.FC<Props> = ({t}) => 
  <div className="fe-wallet__wallet">
    <MaintenancePage pageName={t('pages.wallet')} />
  </div>
;

export default withTranslation()(Wallet);