import { render } from '@testing-library/react';
import Panel from '../';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

const store = createStore(()=>[], applyMiddleware());

test('renders Credit main page', () => {
  const { asFragment } = render(
  <Provider store={store}>
    <Panel />
  </Provider>);
  expect(asFragment()).toMatchSnapshot();
});