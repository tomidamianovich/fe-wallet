import { ComponentType } from 'react'
import { render } from '@testing-library/react'
import NotFound from '../'

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
  const { asFragment } = render(<NotFound />)
  expect(asFragment()).toMatchSnapshot()
})
