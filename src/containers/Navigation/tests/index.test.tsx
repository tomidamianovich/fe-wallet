import { render } from '@testing-library/react';
import Navigation from '../index';
import { BrowserRouter } from "react-router-dom";

test('renders Navigation main without items', () => {
  const { asFragment } = render(<BrowserRouter><Navigation links={['']}/></BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});

test('renders Navigation main with items', () => {
  const { asFragment } = render(<BrowserRouter><Navigation links={['link 1', 'link 2', 'link 3']}/></BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});