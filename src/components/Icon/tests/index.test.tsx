import { render } from '@testing-library/react';
import Icon from '../';
import { NAV_LINKS } from '../../../utils/constants';

test('renders NavItem main page', () => {
  const {icon} = NAV_LINKS[0];
  const { asFragment } = render(<Icon icon={icon} />);
  expect(asFragment()).toMatchSnapshot();
});