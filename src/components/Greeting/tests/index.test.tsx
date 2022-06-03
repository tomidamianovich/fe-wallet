import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Greeting from '../index';
import { balances, currencies } from '../../../utils/tests';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

const store = createStore(()=>[], applyMiddleware());

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: any) => {
    Component.defaultProps = {...Component.defaultProps, t: (translation: string) => translation};
    return Component;
  }
}));

test('renders Greeting with balances', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Greeting 
        balances={balances}
        currencies={currencies}
        />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders Greeting without balances', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Greeting 
        balances={[]}
        currencies={[]}
      />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

