import { render } from '@testing-library/react';
import Wallet from '../';

test('renders Credit main page', () => {
  const { asFragment } = render(<Wallet />);
  expect(asFragment()).toMatchSnapshot();
});