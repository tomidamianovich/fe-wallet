import { render } from '@testing-library/react';
import MaintenancePage from '../index';
import navLinkReducer from "../../../reducers/navLinkReducer"
import { Provider } from 'react-redux';
import { createStore } from "redux";

const store = createStore(navLinkReducer);

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: any) => {
    Component.defaultProps = {...Component.defaultProps, t: (translation: string) => translation};
    return Component;
  }
}));

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