import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Greeting from '../index';
import { balances } from '../../../utils/store';

test('renders Greeting with balances', () => {
  const { asFragment } = render(
    <Greeting 
      balances={balances}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders Greeting without balances', () => {
  const { asFragment } = render(
    <Greeting 
      balances={[]}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

