import React from 'react';
import MaintenancePage from "../../components/MaintenancePage";
import './styles/index.scss';

type Props = {};

const Exchange: React.FC<Props> = () => 
  <div className="fe-wallet__exchange">
    <MaintenancePage pageName="exchange" />
  </div>
;

export default Exchange;
