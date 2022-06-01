import { transaction, transactionTitle, transactionStatus } from '../utils/type';

const ENDPOINTS = {
  CURRENCIES: 'http://localhost:3001/currencies',
  RATES: 'http://localhost:3001/rates',
  BALANCES: 'http://localhost:3001/balance'
}

const PANEL = {
  HEADING: "Mi billetera",
  SUBHEADING: "En tu billetera vas a poder almacenar todas las criptomonedas que compres en ripio.",
}

const TRANSACTIONS:{
  HEADING: string,
  HEADER: string[],
  TYPES: transaction,
  TYPES_TITLES: transactionTitle,
  STATUS: transactionStatus
} = {
  HEADING: "Mis movimientos",
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

const WORDINGS = {
  BALANCE: {
    DETAIL: {
      INPUT: {
        LABELS: {
          TRANSACTION: "Seleccione el tipo de operacion a realizar",
          AMOUNT: "Ingrese cantidad",
          ARIA_LABEL : "Monto de la transacción"
        },
        MESSAGES: {
          INSUFFICIENT_AMOUNT: "Dinero insuficiente",
          AMOUNT_TO_DEBIT: "Monto a debitar",
          AMOUNT_NEEDED: "Monto necesario",
          ACTUAL_BALANCE: "Monto actual"
        }
      },
      ACTIONS: {
        CANCEL: {
          LABEL: "Cancelar",
          ARIA_LABEL: "Cancelar transacción",
        },
        CONFIRM: {
          LABEL: "Confirmar",
          ARIA_LABEL: "Confirmar transacción",
        }
      },
      CARD: {
        ACCOUNT: "Cuenta"
      }
    },
    SUMMARY: {
      DROPDOWN: {
        ARIA_LABEL: "Seleccionar moneda para ver balance"
      }
    }
  },
  CONVERTER: {
    FROM: {
      DROPDOWN: {
        ARIA_LABEL: "Seleccionar crypto origen",
        NAME: "from"
      },
      INPUT: {
        ARIA_LABEL: "Cripto a convertir",
        NAME: "from_amount"
      }
    },
    TO: {
      DROPDOWN: {
        ARIA_LABEL: "Seleccionar crypto destino",
        NAME: "to"
      },
      INPUT: {
        ARIA_LABEL: "Cripto convertida",
        NAME: "to_amount"
      }
    },
    BUTTON: {
      ARIA_LABEL: "Convertir",
      LABEL: "Convertir",
    }
  },
  CURRENCIES: {
    TYPES: {
      FIAT: "FIAT",
      CRYPTO: "CRYPTO"
    }
  },
  MAINTENANCE: {
    TITLE: "Pagina en Mantenimiento",
    SUBTITLE: {
      BEGINNING: "Oops! Estamos trabajando en la pagina ",
      ENDING: ". Ingrese nuevamente a esta seccion más tarde."
    }
  },
  NAVIGATION: {
    NAV_ITEM: {
      NAME: "Salir"
    }
  },
  NOT_FOUND: "Pagina no encontrada.",
  ERROR_FOUND: "Oops. Ocurrio un error",
  PAGES: {
    WALLET: "wallet",
    CREDIT: "credit",
    EXCHANGE: "exchange",
    LAUNCHPAD: "launchpad",
    MARKET_RATES: "market-rates",
    PANEL: "panel",
  }
}

export {
  ENDPOINTS,
  PANEL,
  TRANSACTIONS,
  DEFAULT_BALANCE,
  COMISIONS,
  NAV_LINKS,
  WORDINGS
}