import React from 'react';
import MaintenancePage from "../../components/MaintenancePage";
import { WORDINGS } from "../../utils/constants";
import './styles/index.scss';

type Props = {};

const Exchange: React.FC<Props> = () => 
  <div className="fe-wallet__exchange">
    <MaintenancePage pageName={WORDINGS.PAGES.EXCHANGE} />
  </div>
;

export default Exchange;
