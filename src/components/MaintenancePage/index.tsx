import React from 'react'
import './styles/index.scss'
import { useSelector } from 'react-redux'
import { CombinedState, NavLinkState, NavLinkType } from '../../utils/type'
import { withTranslation, WithTranslation } from 'react-i18next'

type Props = {
  pageName: string
  isError?: boolean
} & WithTranslation

/*

  Component Name: MaintenancePage
  Usages: 
    - Component that allow handles maintenance and error app states

*/

const MaintenancePage: React.FC<Props> = ({ pageName, isError = false, t }) => {
  const navLinks: NavLinkState = useSelector(
    (state: CombinedState) => state?.NavLinkReducer,
  )
  const title = isError ? t('error.title') : t('maintenance.title')
  const subtitleBeginning = isError
    ? t('error.subtitle.beginning')
    : t('maintenance.subtitle.beginning')
  const subtitleEnding = isError
    ? t('error.subtitle.ending')
    : t('maintenance.subtitle.ending')
  const getPageName = () => {
    const page: NavLinkType = navLinks?.find(
      page => page?.to === pageName?.toLocaleLowerCase(),
    )
    return page?.name ?? ''
  }

  return (
    <div className="fe-wallet__maintenance-page">
      <h1>{title}</h1>
      <h3>
        {subtitleBeginning}
        {getPageName()}
        {subtitleEnding}
      </h3>
    </div>
  )
}

export default withTranslation()(MaintenancePage)
