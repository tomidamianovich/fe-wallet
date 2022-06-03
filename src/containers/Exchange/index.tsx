import React from 'react';
import MaintenancePage from "../../components/MaintenancePage";
import { withTranslation, WithTranslation } from 'react-i18next';
import './styles/index.scss';

type Props = {} & WithTranslation;

const Exchange: React.FC<Props> = ({ t }) => 
  <div className="fe-wallet__exchange">
    <MaintenancePage pageName={t('pages.exchange')} />
  </div>
;

export default withTranslation()(Exchange);
