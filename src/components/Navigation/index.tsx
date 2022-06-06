import React from 'react';
import './styles/index.scss';
import { withTranslation, WithTranslation } from 'react-i18next';
import NavItem from '../../components/NavItem';

type Link = { 
  name: string, 
  to: string,
  icon: any,
};

type Props = {
  links: Link[];
} & WithTranslation;

/*

  Component Name: Navigation
  Usages: 
    - Component that allows us to show navigation links in the left side of the app

*/

const Navigation: React.FC<Props> = ({ links, t }) => 
  <nav className="fe-wallet__content__navigation">
    { 
      links && 
      <ul className="fe-wallet__content__navigation__list">
        { links?.map( (link, index) => <NavItem {...link} key={index} />) }
      </ul> 
    }
    <div className="fe-wallet__content__navigation__logout">
      <NavItem name={t('navigation.nav_item.name')} icon="logout" to="logout" />
    </div>
  </nav>
;

export default withTranslation()(Navigation);