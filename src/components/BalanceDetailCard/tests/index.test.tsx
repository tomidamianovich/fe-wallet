import { ComponentType } from 'react'
import { render } from '@testing-library/react'
import BalanceDetailCard from '../index'
import { balances, cryptoCurrencies } from '../../../utils/tests'
import { createStore } from 'redux'
import currentBalanceReducer from '../../../reducers/currentBalanceReducer'
import { Provider } from 'react-redux'

const store = createStore(currentBalanceReducer)

const mockFn = jest.fn().mockImplementationOnce(() => Promise.resolve())

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: ComponentType) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: (translation: string) => translation,
    }
    return Component
  },
}))

test('renders BalanceDetailCard with balances', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BalanceDetailCard
        handleAction={mockFn}
        {...balances[0]}
        {...cryptoCurrencies[0]}
        ticker="ars"
        sell_rate="1"
        amount={1}
        account_limit={1}
      />
    </Provider>,
  )
  expect(asFragment()).toMatchSnapshot()
})
