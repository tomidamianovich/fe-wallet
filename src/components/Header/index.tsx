import React from 'react';
import './styles/index.scss';
import logo from '../../assets/logo-brand.svg';
import { NavLink } from 'react-router-dom';

type Props = {};

const Header: React.FC<Props> = () => 
  <header className="fe-wallet__header">
    <div className='fe-wallet__header__logo-container'>
      <NavLink to="/panel">
        <img src={logo} alt={"logo"} className="fe-wallet__header__logo-container__logo"/>
      </NavLink>
    </div>
  </header>
;

export default Header;