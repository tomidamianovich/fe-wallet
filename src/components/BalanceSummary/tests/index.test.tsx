import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BalanceSummary from '../index';
import { balances, fiatCurrencies, currencies } from '../../../utils/store';

test('renders BalanceSummary with balances', () => {
  const { asFragment } = render(
    <BalanceSummary 
      balances={balances}
      currencies={currencies}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders BalanceSummary with balances and switching between currencies', async () => {
  render(
    <BalanceSummary 
      balances={balances}
      currencies={fiatCurrencies}
    />
  );
  
  const currencySelector = screen.getByRole('combobox', { name: "Seleccionar moneda para ver balance" });
  expect(currencySelector).toBeInTheDocument();
  expect(currencySelector).toHaveValue("0");
  expect(currencySelector).toHaveDisplayValue("ARS");

  const currencySelectorArs = screen.getByRole('option', { name: "ARS" });
  const currencySelectorUsd = screen.getByRole('option', { name: "USD" });
  expect(currencySelectorArs).toHaveValue("0");
  expect(currencySelectorUsd).toHaveValue("1");

  expect(currencySelector).toHaveValue("0");

  fireEvent.change(currencySelector, { target: { value: "1" }});
  await waitFor(() => {
    expect(currencySelector).toHaveValue("1");
    expect(currencySelector).toHaveDisplayValue("USD");
    expect(screen.findByDisplayValue("U$S")).toBeTruthy();
  });

  fireEvent.change(currencySelector, { target: { value: "0" }});
  await waitFor(() => {
    expect(currencySelector).toHaveValue("0");
    expect(currencySelector).toHaveDisplayValue("ARS");
    expect(screen.findByDisplayValue("$")).toBeTruthy();
  });
  
});

