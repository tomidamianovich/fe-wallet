import { render } from '@testing-library/react';
import MaintenancePage from '../index';
import navLinkReducer from "../../../reducers/navLinkReducer"
import { Provider } from 'react-redux';
import { createStore } from "redux";

const store = createStore(navLinkReducer);

test('renders MaintenancePage with name', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MaintenancePage 
        pageName="wallet"
      />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders MaintenancePage with name', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MaintenancePage 
        pageName=""
      />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});