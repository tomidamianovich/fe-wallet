import { ComponentType } from 'react'
import { render } from '@testing-library/react'
import Navigation from '../index'
import { BrowserRouter } from 'react-router-dom'
import { NAV_LINKS } from '../../../utils/constants'

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: ComponentType) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: (translation: string) => translation,
    }
    return Component
  },
}))

test('renders Navigation main without items', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navigation links={[]} />
    </BrowserRouter>,
  )
  expect(asFragment()).toMatchSnapshot()
})

test('renders Navigation main with items', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navigation links={NAV_LINKS} />
    </BrowserRouter>,
  )
  expect(asFragment()).toMatchSnapshot()
})
