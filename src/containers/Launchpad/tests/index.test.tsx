import { render } from '@testing-library/react';
import Launchpad from '../';
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

test('renders Launchpad main page', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Launchpad />
    </Provider>);
  expect(asFragment()).toMatchSnapshot();
});