import { ComponentType } from 'react'
import { render } from '@testing-library/react'
import Exchange from '../'
import navLinkReducer from '../../../reducers/navLinkReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(navLinkReducer)

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: ComponentType) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: (translation: string) => translation,
    }
    return Component
  },
}))

test('renders Exchange main page', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Exchange />
    </Provider>,
  )
  expect(asFragment()).toMatchSnapshot()
})
