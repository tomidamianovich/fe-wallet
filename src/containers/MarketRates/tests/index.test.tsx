import { render } from '@testing-library/react';
import MarketRates from '../';

test('renders Market Rates main page', () => {
  const { asFragment } = render(<MarketRates />);
  expect(asFragment()).toMatchSnapshot();
});