import { render } from '@testing-library/react';
import Launchpad from '../';
import navLinkReducer from "../../../reducers/navLinkReducer"
import { Provider } from 'react-redux';
import { createStore } from "redux";

const store = createStore(navLinkReducer);

test('renders Launchpad main page', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Launchpad />
    </Provider>);
  expect(asFragment()).toMatchSnapshot();
});