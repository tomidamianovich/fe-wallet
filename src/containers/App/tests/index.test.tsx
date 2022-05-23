import { render } from '@testing-library/react';
import App from '../';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

const store = createStore(()=>[], applyMiddleware());

test('renders App main page', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>);
  expect(asFragment()).toMatchSnapshot();
});
