import { ComponentType } from 'react'
import { render } from '@testing-library/react'
import BalanceDetail from '../index'
import { balances, currencies, rates } from '../../../utils/tests'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(() => [], applyMiddleware())

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: ComponentType) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: (translation: string) => translation,
    }
    return Component
  },
}))

test('renders BalanceDetail with balances', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BalanceDetail
        balances={balances}
        currencies={currencies}
        rates={rates}
      />
    </Provider>,
  )
  expect(asFragment()).toMatchSnapshot()
})
