import React from 'react';
import MaintenancePage from "../../components/MaintenancePage";
import './styles/index.scss';

type Props = {};

const Launchpad: React.FC<Props> = () => 
  <div className="fe-wallet__launchpad">
    <MaintenancePage pageName="launchpad" />
  </div>
;

export default Launchpad;