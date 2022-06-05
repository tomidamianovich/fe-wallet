import React from 'react';
import './styles/index.scss';
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

type Props = {
  to: string;
  name: string;
  icon: string;
};

const NavItem: React.FC<Props> = ({to, name, icon}) => 
  <li className='fe-wallet__content__navigation__list__item'>
    <NavLink 
      to={to}
      className={({ isActive }) => `fe-wallet__content__navigation__list__item__link ${isActive && 'fe-wallet__content__navigation__list__item__link--active'}`}
    >
      <div className='fe-wallet__content__navigation__list__item__link__content'>
        <Icon icon={icon}/>
        <span>
          {name}
        </span>
      </div>
    </NavLink>
  </li>;
;

export default NavItem;