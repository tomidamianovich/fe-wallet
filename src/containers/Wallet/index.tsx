import React from 'react';
import MaintenancePage from '../../components/MaintenancePage';
import './styles/index.scss';

type Props = {};

const Wallet: React.FC<Props> = () => 
  <div className="fe-wallet__wallet">
    <MaintenancePage pageName={"wallet"} />
  </div>
;

export default Wallet;