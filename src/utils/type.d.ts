// Currency and Rate

export type CurrencyType = {
  ticker: string,
  name: string,
  symbol: string,
  decimals: number,
  type: string,
  actions: {
    action: string,
    enabled: boolean
  }[],
  url_images: {
    image_png: string,
    image_svg: string,
  },
  color: string | null,
  categories: any[],
  is_favorite: boolean
};

export type RateType = {
  ticker: string,
  buy_rate: string,
  sell_rate: string,
  variation: string
};

export type BalanceType = {
  ticker: string,
  amount: number,
  account_limit: number
};

export type NavLinkType = any;

export type CurrencyState = CurrencyType[];
export type RateState = RateType[];
export type NavLinkState= NavLinkType[];
export type BalanceState= BalanceType[];

export type CurrencyAction = {
  type: string
  payload: CurrencyState
}

export type RateAction = {
  type: string
  payload: RateState
}

export type NavLinkAction = {
  type: string
  payload: NavLinkState
}

export type BalanceAction = {
  type: string
  payload: BalanceState
}

export type CurrencyDispatchType = (args: CurrencyAction) => CurrencyAction;
export type RateDispatchType = (args: RateAction) => RateAction;
export type NavLinkDispatchType = (args: RateAction) => NavLinkAction;
export type BalanceDispatchType = (args: BalanceAction) => BalanceAction;

// Combined Types

export type CombinedState = {
  CurrencyReducer: CurrencyState,
  RateReducer: RateState,
  NavLinkReducer: NavLinkState,
  BalanceReducer: BalanceState
}

export type CombinedAction = {
  CurrencyReducer: CurrencyAction,
  RateReducer: RateAction,
  NavLinkReducer: NavLinkAction,
  BalanceReducer: BalanceAction
}

export type CombinedDispatchType = (args: CombinedAction) => CombinedAction