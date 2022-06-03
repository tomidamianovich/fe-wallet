import React from 'react';
import './styles/index.scss';
import { withTranslation, WithTranslation } from 'react-i18next';

type Props = {} & WithTranslation;

const NotFound: React.FC<Props> = ({ t }) => 
  <header className="fe-wallet__not-found">
    {t('not_found')}
  </header>
;

export default withTranslation()(NotFound);