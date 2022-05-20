import { render } from '@testing-library/react';
import Credit from '../';

test('renders Credit main page', () => {
  const { asFragment } = render(<Credit />);
  expect(asFragment()).toMatchSnapshot();
});
