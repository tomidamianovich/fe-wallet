import { render } from '@testing-library/react';
import NavItem from '../';
import navLinks from '../../../store/links';
import { BrowserRouter } from 'react-router-dom';

test('renders NavItem main page', () => {
  const link = navLinks[0];
  const { asFragment } = render(
    <BrowserRouter>
      <NavItem {...link} />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});