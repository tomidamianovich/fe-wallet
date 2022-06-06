import { ComponentType } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Converter from '../index'
import { cryptoCurrencies, rates } from '../../../utils/tests'

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: ComponentType) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: (translation: string) => translation,
    }
    return Component
  },
}))

test('renders Converter  with currencies and rates', () => {
  const { asFragment } = render(
    <Converter currencies={cryptoCurrencies} rates={rates} />,
  )
  expect(asFragment()).toMatchSnapshot()
})

test('renders Converter  without currencies and rates', () => {
  const { asFragment } = render(<Converter currencies={[]} rates={[]} />)
  expect(asFragment()).toMatchSnapshot()
})

test('Testing Converter with currencies and rates', async () => {
  render(<Converter currencies={cryptoCurrencies} rates={rates} />)

  const inputFrom = screen.getByRole('spinbutton', {
    name: 'converter.from.input.aria_label',
  })
  const inputTo = screen.getByRole('spinbutton', {
    name: 'converter.to.input.aria_label',
  })
  expect(inputFrom).toBeInTheDocument()
  expect(inputFrom).toHaveValue(0)
  expect(inputTo).toBeInTheDocument()
  expect(inputTo).toHaveValue(0)

  const selectedCryptoFrom = cryptoCurrencies[0].ticker
  const selectedCryptoTo = cryptoCurrencies[1].ticker
  const selectFrom = screen.getByRole('combobox', {
    name: 'converter.from.dropdown.aria_label',
  })
  const selectTo = screen.getByRole('combobox', {
    name: 'converter.to.dropdown.aria_label',
  })
  expect(selectFrom).toBeInTheDocument()
  expect(selectFrom).toHaveValue('0')
  expect(selectTo).toBeInTheDocument()
  expect(selectTo).toHaveValue('1')
  expect(selectFrom).toHaveDisplayValue('BTC')
  expect(selectTo).toHaveDisplayValue('ETH')

  fireEvent.change(inputFrom, { target: { value: '10' } })
  expect(inputFrom).toHaveValue(10)
  await waitFor(() => expect(inputTo).toHaveValue(0))

  const convertirButton = screen.getByRole('button', {
    name: 'converter.button.aria_label',
  })
  expect(convertirButton).toBeInTheDocument()
  fireEvent.click(convertirButton)
  const [{ sell_rate }] = rates.filter(
    rate =>
      rate.ticker?.includes(selectedCryptoFrom) && rate.ticker?.includes('ARS'),
  )
  const [{ buy_rate }] = rates.filter(
    rate =>
      rate.ticker?.includes(selectedCryptoTo) && rate.ticker?.includes('ARS'),
  )
  const money = 10 * parseInt(sell_rate)
  const result = buy_rate ? money / parseInt(buy_rate) : 0
  await waitFor(() => expect(inputTo).toHaveValue(result))
})
