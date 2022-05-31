import { TransactionActionType, TransactionStatusType } from '../utils/type';

const ENDPOINTS = {
  CURRENCIES: 'http://localhost:3001/currencies',
  RATES: 'http://localhost:3001/rates',
  BALANCES: 'http://localhost:3001/balance'
}

const PANEL = {
  HEADING: "Mi billetera",
  SUBHEADING: "En tu billetera vas a poder almacenar todas las criptomonedas que compres en ripio.",
}

interface transaction {
  ["DEPOSIT"]: TransactionActionType;
  ["WITHDRAWAL"]: TransactionActionType;
  ["SEND"]: TransactionActionType;
  ["RECEIVE"]: TransactionActionType;
  ["BUY"]: TransactionActionType;
  ["SWAP"]: TransactionActionType;
}
interface transactionTitle {
  "DEPOSIT": string;
  "WITHDRAWAL": string;
  "SEND": string;
  "RECEIVE": string;
  "BUY": string;
  "SWAP": string;
}

interface transactionStatus {
  ["PENDING"]: TransactionStatusType;
  ["FAILURE"]: TransactionStatusType;
  ["SUCCESS"]: TransactionStatusType;
}

const TRANSACTIONS:{
  HEADER: string[],
  TYPES: transaction,
  TYPES_TITLES: transactionTitle,
  STATUS: transactionStatus
} = {
  HEADER: [
    "Fecha",
    "Tipo de Operación",
    "Método",
    "Estado",
    "Comisión",
    "Monto",
  ],
  TYPES: {
    DEPOSIT: "DEPOSIT",
    WITHDRAWAL: "WITHDRAWAL",
    SEND: "SEND",
    RECEIVE: "RECEIVE",
    BUY: "BUY",
    SWAP: "SWAP"
  },
  TYPES_TITLES: {
    DEPOSIT: "Ingreso",
    WITHDRAWAL: "Retiro",
    SEND: "Envio",
    RECEIVE: "Recibo",
    BUY: "Compra",
    SWAP: "Swap"
  },
  STATUS: {
    PENDING: "PENDING",
    FAILURE: "FAILURE",
    SUCCESS: "SUCCESS"
  }
}

const DEFAULT_BALANCE = {
  ticker: "",
  amount: 0,
  account_limit: 0,
  name: "",
  symbol: "",
  decimals: 2,
  type: "",
  actions: [{
    action: "",
    enabled: true
  }],
  url_images: {
    image_png: "",
    image_svg: "",
  },
  color: "",
  categories: [],
  is_favorite: true,
  sell_rate: ""
}

const COMISIONS = {
  BUY: 0.003,
  DEPOSIT: 0,
  WITHDRAWAL: 0.0004,
  SEND: 0,
  RECEIVE: 0,
  SWAP: 0.00004
}

type Link = {
  name: string;
  to: string;
  icon: string;
};

const NAV_LINKS:Link[] = [
  {
    name: 'Panel',
    to: 'panel',
    icon: 'panel'
  },
  {
    name: 'Billetera',
    to: 'wallet',
    icon: 'wallet'
  },
  {
    name: 'Cotizaciones',
    to: 'market-rates',
    icon: 'market-rates'
  },
  {
    name: 'Créditos',
    to: 'credit',
    icon: 'credit'
  },
  {
    name: 'Exchange',
    to: 'exchange',
    icon: 'exchange'
  },
  {
    name: 'Launchpad',
    to: 'launchpad',
    icon: 'launchpad'
  }
];

export {
  ENDPOINTS,
  PANEL,
  TRANSACTIONS,
  DEFAULT_BALANCE,
  COMISIONS,
  NAV_LINKS
}