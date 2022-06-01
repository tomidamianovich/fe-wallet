import React from 'react';
import MaintenancePage from "../../components/MaintenancePage";
import { WORDINGS } from "../../utils/constants";
import './styles/index.scss';

type Props = {};

const Launchpad: React.FC<Props> = () => 
  <div className="fe-wallet__launchpad">
    <MaintenancePage pageName={WORDINGS.PAGES.LAUNCHPAD} />
  </div>
;

export default Launchpad;