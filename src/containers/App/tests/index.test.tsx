import { render } from '@testing-library/react';
import App from '../';

test('renders App main page', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
