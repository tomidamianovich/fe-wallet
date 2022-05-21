import { render } from '@testing-library/react';
import Icon from '../';
import navLinks from '../../../utils/store/links';

test('renders NavItem main page', () => {
  const {icon} = navLinks[0];
  const { asFragment } = render(<Icon icon={icon} />);
  expect(asFragment()).toMatchSnapshot();
});