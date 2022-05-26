import { render } from '@testing-library/react';
import Main from '../index';

test('renders Main main without items', () => {
  const { asFragment } = render(<Main currencies={[]} rates={[]} balances={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
