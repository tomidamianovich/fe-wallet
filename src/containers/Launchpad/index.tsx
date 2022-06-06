import React from 'react'
import MaintenancePage from '../../components/MaintenancePage'
import { withTranslation, WithTranslation } from 'react-i18next'
import './styles/index.scss'

type Props = WithTranslation

/*

  Component Name: Launchpad
  Usages: 
    - Launchpad Page
    
*/

const Launchpad: React.FC<Props> = ({ t }) => (
  <div className="fe-wallet__launchpad">
    <MaintenancePage pageName={t('pages.launchpad')} />
  </div>
)
export default withTranslation()(Launchpad)
