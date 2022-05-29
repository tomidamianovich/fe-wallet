const ENDPOINTS = {
  CURRENCIES: 'http://localhost:3001/currencies',
  RATES: 'http://localhost:3001/rates',
  BALANCES: 'http://localhost:3001/balance'
}

const PANEL = {
  HEADING: "Mi billetera",
  SUBHEADING: "En tu billetera vas a poder almacenar todas las criptomonedas que compres en ripio.",
}

const TRANSACTIONS = {
  HEADER: [
    "Fecha",
    "Tipo de Operación",
    "Método",
    "Estado",
    "Comisión",
    "Monto",
  ]
}

export {
  ENDPOINTS,
  PANEL,
  TRANSACTIONS
}