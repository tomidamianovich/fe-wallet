import { render } from '@testing-library/react';
import Panel from '../';

test('renders Credit main page', () => {
  const { asFragment } = render(<Panel />);
  expect(asFragment()).toMatchSnapshot();
});