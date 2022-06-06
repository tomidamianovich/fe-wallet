import { CurrencyType } from '../type'

const fiatCurrencies: CurrencyType[] = [
  {
    ticker: 'ARS',
    name: 'Pesos',
    symbol: '$',
    decimals: 2,
    type: 'FIAT',
    actions: [
      {
        action: 'DEPOSIT',
        enabled: true,
      },
      {
        action: 'WITHDRAWAL',
        enabled: true,
      },
      {
        action: 'SEND',
        enabled: true,
      },
      {
        action: 'RECEIVE',
        enabled: true,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/ARS.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/ARS.svg',
    },
    color: null,
    categories: [],
    is_favorite: false,
  },
  {
    ticker: 'USD',
    name: 'Dolares',
    symbol: 'U$S',
    decimals: 2,
    type: 'FIAT',
    actions: [
      {
        action: 'DEPOSIT',
        enabled: true,
      },
      {
        action: 'WITHDRAWAL',
        enabled: true,
      },
      {
        action: 'SEND',
        enabled: true,
      },
      {
        action: 'RECEIVE',
        enabled: true,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/USDC.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/USDC.svg',
    },
    color: null,
    categories: [],
    is_favorite: false,
  },
]

export default fiatCurrencies
