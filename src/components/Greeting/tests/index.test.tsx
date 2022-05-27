import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Greeting from '../index';
import { balances, currencies } from '../../../utils/store';

test('renders Greeting with balances', () => {
  const { asFragment } = render(
    <Greeting 
      balances={balances}
      currencies={currencies}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders Greeting without balances', () => {
  const { asFragment } = render(
    <Greeting 
      balances={[]}
      currencies={[]}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

