import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../'

test('renders Exchange main page', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  )
  expect(asFragment()).toMatchSnapshot()
})
