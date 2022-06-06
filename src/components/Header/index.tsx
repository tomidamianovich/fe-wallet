import React from 'react';
import './styles/index.scss';
import logo from '../../assets/logo-brand.svg';
import Icon from '../Icon';
import { NavLink } from 'react-router-dom';

type Props = {};

const Header: React.FC<Props> = () => 
  <header className="fe-wallet__header">
    <div className='fe-wallet__header__logo-container'>
      <NavLink to="/fe-wallet">
        <img src={logo} alt={"logo"} className="fe-wallet__header__logo-container__logo"/>
      </NavLink>
      <div className='fe-wallet__header__icons'>
        <Icon icon="help" width={26} height={26}/>
        <Icon icon="bell" width={32} height={32}/>
        <Icon icon="profile" width={32} height={29}/>
      </div>
    </div>
  </header>
;

export default Header;