import React from 'react';
import MaintenancePage from "../../components/MaintenancePage";
import { WORDINGS } from "../../utils/constants";
import './styles/index.scss';

type Props = {};

const Credit: React.FC<Props> = () => 
  <div className="fe-wallet__credit">
    <MaintenancePage pageName={WORDINGS.PAGES.CREDIT} />
  </div>
;

export default Credit;