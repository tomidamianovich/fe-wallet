import { render } from '@testing-library/react'
import NavItem from '../'
import { NAV_LINKS } from '../../../utils/constants'
import { BrowserRouter } from 'react-router-dom'

test('renders NavItem main page', () => {
  const link = NAV_LINKS[0]
  const { asFragment } = render(
    <BrowserRouter>
      <NavItem {...link} />
    </BrowserRouter>,
  )
  expect(asFragment()).toMatchSnapshot()
})
