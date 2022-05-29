import React from 'react';
import './styles/index.scss';
import NavItem from '../../components/NavItem';

type Link = { 
  name: string, 
  to: string,
  icon: any,
};

type Props = {
  links: Link[];
};

const Navigation: React.FC<Props> = ({ links }) => 
  <nav className="fe-wallet__content__navigation">
    { 
      links && 
      <ul className="fe-wallet__content__navigation__list">
        { links?.map( (link, index) => <NavItem {...link} key={index} />) }
      </ul> 
    }
    <div className="fe-wallet__content__navigation__logout">
      <NavItem name="Salir" icon="logout" to="logout" />
    </div>
  </nav>
;

export default Navigation;