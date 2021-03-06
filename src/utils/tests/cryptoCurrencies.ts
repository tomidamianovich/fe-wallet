import { CurrencyType } from '../type'

const cryptoCurrencies: CurrencyType[] = [
  {
    ticker: 'BTC',
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 8,
    type: 'CRYPTO',
    actions: [
      {
        action: 'SEND',
        enabled: true,
      },
      {
        action: 'RECEIVE',
        enabled: true,
      },
      {
        action: 'BUY',
        enabled: true,
      },
      {
        action: 'SELL',
        enabled: true,
      },
      {
        action: 'SWAP',
        enabled: true,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/BTC.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/BTC.svg',
    },
    color: '#feb402',
    categories: ['Blockchain'],
    is_favorite: false,
  },
  {
    ticker: 'ETH',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    type: 'CRYPTO',
    actions: [
      {
        action: 'SEND',
        enabled: true,
      },
      {
        action: 'RECEIVE',
        enabled: true,
      },
      {
        action: 'SWAP',
        enabled: true,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/ETH.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/ETH.svg',
    },
    color: '#333333',
    categories: ['Blockchain'],
    is_favorite: false,
  },
  {
    ticker: 'USDC',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    type: 'ERC20_TOKEN',
    actions: [
      {
        action: 'SEND',
        enabled: true,
      },
      {
        action: 'RECEIVE',
        enabled: true,
      },
      {
        action: 'SWAP',
        enabled: true,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/USDC.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/USDC.svg',
    },
    color: '#2776ca',
    categories: ['Stablecoin'],
    is_favorite: false,
  },
  {
    ticker: 'LTC',
    name: 'Litecoin',
    symbol: 'LTC',
    decimals: 8,
    type: 'CRYPTO',
    actions: [
      {
        action: 'RECEIVE',
        enabled: true,
      },
      {
        action: 'SEND',
        enabled: true,
      },
      {
        action: 'SWAP',
        enabled: true,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/LTC.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/LTC.svg',
    },
    color: '#FF7049',
    categories: ['Blockchain'],
    is_favorite: false,
  },
  {
    ticker: 'DAI',
    name: 'Dai',
    symbol: 'DAI',
    decimals: 18,
    type: 'ERC20_TOKEN',
    actions: [
      {
        action: 'RECEIVE',
        enabled: true,
      },
      {
        action: 'SEND',
        enabled: true,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/DAI.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/DAI.svg',
    },
    color: '#fd024f',
    categories: ['Stablecoin'],
    is_favorite: false,
  },
  {
    ticker: 'AXS',
    name: 'Axie Infinity',
    symbol: 'AXS',
    decimals: 18,
    type: 'ERC20_TOKEN',
    actions: [
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
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/AXS.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/AXS.svg',
    },
    color: '#FF7049',
    categories: ['Gaming', 'NFT'],
    is_favorite: false,
  },
]

export default cryptoCurrencies
