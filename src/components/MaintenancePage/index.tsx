import React from 'react';
import './styles/index.scss';
import { useSelector } from 'react-redux';
import {WORDINGS} from "../../utils/constants"
import { CombinedState, NavLinkState, NavLinkType } from '../../utils/type';

type Props = {
  pageName: string
};

const MaintenancePage: React.FC<Props> = ({
  pageName
}) => {
  const navLinks:NavLinkState  = useSelector((state:CombinedState) => state?.NavLinkReducer);
  const { TITLE, SUBTITLE } = WORDINGS.MAINTENANCE;
  const getPageName = () => {
    const page:NavLinkType = navLinks?.find(page => page?.to === pageName?.toLocaleLowerCase());
    return page?.name ?? ""
  }

  return (
  <div className="fe-wallet__maintenance-page">
    <h1>{TITLE}</h1>
    <h3>
      {SUBTITLE.BEGINNING}{getPageName()}{SUBTITLE.ENDING}
    </h3>
  </div>
)};

export default MaintenancePage;