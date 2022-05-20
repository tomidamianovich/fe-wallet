import { render } from '@testing-library/react';
import NotFound from '../';

test('renders Exchange main page', () => {
  const { asFragment } = render(<NotFound />);
  expect(asFragment()).toMatchSnapshot();
});