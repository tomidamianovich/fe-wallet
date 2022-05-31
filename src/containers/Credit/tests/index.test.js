import { render } from '@testing-library/react';
import Credit from '../';
import navLinkReducer from "../../../reducers/navLinkReducer"
import { Provider } from 'react-redux';
import { createStore } from "redux";

const store = createStore(navLinkReducer);

test('renders Credit main page', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Credit />
    </Provider>);
  expect(asFragment()).toMatchSnapshot();
});
