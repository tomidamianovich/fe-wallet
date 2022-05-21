import { render } from '@testing-library/react';
import Main from '../index';

test('renders Navigation main without items', () => {
  const { asFragment } = render(<Main currencies={[]} rates={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
