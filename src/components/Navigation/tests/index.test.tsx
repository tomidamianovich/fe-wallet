import { render } from '@testing-library/react';
import Navigation from '../index';
import { BrowserRouter } from "react-router-dom";
import navLinks from '../../../utils/store/links';

test('renders Navigation main without items', () => {
  const { asFragment } = render(<BrowserRouter><Navigation links={[]}/></BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});

test('renders Navigation main with items', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navigation links={navLinks}/>
    </BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});
