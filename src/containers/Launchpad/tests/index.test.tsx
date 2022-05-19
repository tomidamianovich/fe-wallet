import { render } from '@testing-library/react';
import Launchpad from '../';

test('renders Launchpad main page', () => {
  const { asFragment } = render(<Launchpad />);
  expect(asFragment()).toMatchSnapshot();
});