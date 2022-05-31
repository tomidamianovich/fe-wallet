import React from 'react';
import MaintenancePage from "../../components/MaintenancePage";
import './styles/index.scss';

type Props = {};

const Credit: React.FC<Props> = () => 
  <div className="fe-wallet__credit">
    <MaintenancePage pageName="credit" />
  </div>
;

export default Credit;