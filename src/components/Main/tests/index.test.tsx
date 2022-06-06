import { render } from '@testing-library/react'
import Main from '../index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(() => [], applyMiddleware())

test('renders Main main without items', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Main currencies={[]} rates={[]} balances={[]} />
    </Provider>,
  )
  expect(asFragment()).toMatchSnapshot()
})
