import React from 'react';
import MaintenancePage from "../../components/MaintenancePage";
import { withTranslation, WithTranslation } from 'react-i18next';
import './styles/index.scss';

type Props = WithTranslation;

/*

  Component Name: Credit
  Usages: 
    - Credit Page
    
*/

const Credit: React.FC<Props> = ({t}) => 
  <div className="fe-wallet__credit">
    <MaintenancePage pageName={t('pages.credit')} />
  </div>
;

export default withTranslation()(Credit);