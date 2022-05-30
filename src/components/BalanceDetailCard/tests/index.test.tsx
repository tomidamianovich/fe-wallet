import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BalanceDetailCard from '../index';
import { balances, cryptoCurrencies } from '../../../utils/store';
import { createStore, applyMiddleware } from "redux";
import currentBalanceReducer from "../../../reducers/currentBalanceReducer"
import { Provider } from 'react-redux';

const store = createStore(currentBalanceReducer);

test('renders BalanceDetailCard with balances', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BalanceDetailCard 
        handleModalVisibility={() => {}} 
        {...balances[0]}
        {...cryptoCurrencies[0]}
        ticker="ars"
        sell_rate="1"
        amount={1}
        account_limit={1}
      />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});