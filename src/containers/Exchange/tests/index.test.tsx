import { render } from '@testing-library/react';
import Exchange from '../';

test('renders Exchange main page', () => {
  const { asFragment } = render(<Exchange />);
  expect(asFragment()).toMatchSnapshot();
});