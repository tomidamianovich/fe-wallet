// Currency and Rate

export type CurrencyType = {
  ticker: string,
  name: string,
  symbol: string,
  decimals: number,
  type: string,
  actions: [
    {
    action: string,
    enabled: boolean
    }[],
  ],
  url_images: {
    image_png: string,
    image_svg: string,
  },
  color: string,
  categories: any[],
  is_favorite: boolean
};

export type RateType = {
  ticker: string,
  buy_rate: number,
  sell_rate: number,
  variation: number
};

export type NavLinkType = any;

export type CurrencyState = CurrencyType[];
export type RateState = RateType[];
export type NavLinkState= NavLinkType[];

export type CurrencyAction = {
  type: string
  payload: CurrencyType[]
}

export type RateAction = {
  type: string
  payload: RateType[]
}

export type NavLinkAction = {
  type: string
  payload: NavLinkType[]
}

export type CurrencyDispatchType = (args: CurrencyAction) => CurrencyAction;
export type RateDispatchType = (args: RateAction) => RateAction;
export type NavLinkDispatchType = (args: RateAction) => NavLinkAction;

// Combined Types

export type CombinedState = {
  CurrencyReducer: CurrencyState,
  RateReducer: RateState,
  NavLinkReducer: NavLinkState
}

export type CombinedAction = {
  CurrencyReducer: CurrencyAction,
  RateReducer: RateAction,
  NavLinkReducer: NavLinkAction
}

export type CombinedDispatchType = (args: CombinedAction) => CombinedAction