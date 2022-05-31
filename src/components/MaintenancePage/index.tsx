import React from 'react';
import './styles/index.scss';
import { useSelector } from 'react-redux';
import { CombinedState, NavLinkState, NavLinkType } from '../../utils/type';

type Props = {
  pageName: string
};

const MaintenancePage: React.FC<Props> = ({
  pageName
}) => {
  const navLinks:NavLinkState  = useSelector((state:CombinedState) => state?.NavLinkReducer);
  
  const getPageName = () => {
    const page:NavLinkType = navLinks?.find(page => page?.to === pageName?.toLocaleLowerCase());
    return page?.name ?? ""
  }

  return (
  <div className="fe-wallet__maintenance-page">
    <h1>Pagina en Mantenimiento</h1>
    <h3>
      Oops! Estamos trabajando en la pagina {getPageName()}. Ingrese nuevamente a esta seccion más tarde.
    </h3>
  </div>
)};

export default MaintenancePage;