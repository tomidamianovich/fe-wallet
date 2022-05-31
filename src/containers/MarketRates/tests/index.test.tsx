import { render } from '@testing-library/react';
import MarketRates from '../';
import navLinkReducer from "../../../reducers/navLinkReducer"
import { Provider } from 'react-redux';
import { createStore } from "redux";

const store = createStore(navLinkReducer);

test('renders Market Rates main page', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MarketRates />
    </Provider>);
  expect(asFragment()).toMatchSnapshot();
});