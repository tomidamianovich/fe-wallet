import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BalanceDetail from '../index';
import { balances, fiatCurrencies, currencies, rates } from '../../../utils/tests';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

const store = createStore(()=>[], applyMiddleware());

test('renders BalanceDetail with balances', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BalanceDetail 
        balances={balances}
        currencies={currencies}
        rates={rates}
      />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});