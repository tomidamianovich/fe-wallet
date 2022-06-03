import { render } from '@testing-library/react';
import MarketRates from '../';
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


test('renders Market Rates main page', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MarketRates />
    </Provider>);
  expect(asFragment()).toMatchSnapshot();
});