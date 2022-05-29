import { render } from '@testing-library/react';
import Transaction from '../index';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

const store = createStore(()=>[], applyMiddleware());

test('renders Transaction with balances', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Transaction />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});