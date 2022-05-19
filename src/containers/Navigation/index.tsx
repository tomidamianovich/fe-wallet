import React from 'react';
import './styles/index.scss';
import { NavLink } from "react-router-dom";

type Props = {
  links: string[];
};

type LinkItemProps = {
  to: string;
  name: string;
};

const LinkItem = ({to, name}: LinkItemProps) =>  
  <li>
    <NavLink 
      to={to}
      className={({ isActive }) => `fe-wallet__content__navigation__list__item ${isActive && 'fe-wallet__content__navigation__list__item--active'}`}
    >
      {name}
    </NavLink>
  </li>;

const Navigation: React.FC<Props> = ({ links }) => 
  <nav className="fe-wallet__content__navigation">
    <ul className="fe-wallet__content__navigation__list">
      { links.map( (link, index) => <LinkItem to={link} name={link} key={index} />) }
    </ul>
  </nav>
;

export default Navigation;