import React from 'react';
import MaintenancePage from '../../components/MaintenancePage';
import { WORDINGS } from "../../utils/constants";
import './styles/index.scss';

type Props = {};

const Wallet: React.FC<Props> = () => 
  <div className="fe-wallet__wallet">
    <MaintenancePage pageName={WORDINGS.PAGES.WALLET} />
  </div>
;

export default Wallet;