import { CurrencyType } from '../type'

const currencies: CurrencyType[] = [
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
  {
    ticker: 'BAT',
    name: 'Basic Attention Token',
    symbol: 'BAT',
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
      {
        action: 'SWAP',
        enabled: false,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/BAT.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/BAT.svg',
    },
    color: '#FF7049',
    categories: ['Others'],
    is_favorite: false,
  },
  {
    ticker: 'SOL',
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
    type: 'CRYPTO',
    actions: [
      {
        action: 'SEND',
        enabled: false,
      },
      {
        action: 'RECEIVE',
        enabled: false,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/SOL.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/SOL.svg',
    },
    color: '#8479DA',
    categories: ['Blockchain'],
    is_favorite: false,
  },
  {
    ticker: 'LINK',
    name: 'Chainlink',
    symbol: 'LINK',
    decimals: 18,
    type: 'ERC20_TOKEN',
    actions: [
      {
        action: 'SWAP',
        enabled: false,
      },
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
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/LINK.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/LINK.svg',
    },
    color: '#FF7049',
    categories: ['DeFi'],
    is_favorite: false,
  },
  {
    ticker: 'DOT',
    name: 'Polkadot',
    symbol: 'DOT',
    decimals: 10,
    type: 'CRYPTO',
    actions: [
      {
        action: 'SEND',
        enabled: false,
      },
      {
        action: 'RECEIVE',
        enabled: false,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/DOT.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/DOT.svg',
    },
    color: '#1E1E1E',
    categories: ['Blockchain'],
    is_favorite: false,
  },
  {
    ticker: 'MANA',
    name: 'Decentraland',
    symbol: 'MANA',
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
      {
        action: 'SWAP',
        enabled: false,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/MANA.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/MANA.svg',
    },
    color: '#FF7049',
    categories: ['Gaming', 'NFT'],
    is_favorite: false,
  },
  {
    ticker: 'RPC',
    name: 'Ripio Coin',
    symbol: 'RPC',
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
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/RPC.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/RPC.svg',
    },
    color: '#FF7049',
    categories: ['Community'],
    is_favorite: false,
  },
  {
    ticker: 'SLP',
    name: 'Smooth Love Potion',
    symbol: 'SLP',
    decimals: 0,
    type: 'ERC20_TOKEN',
    actions: [
      {
        action: 'SWAP',
        enabled: false,
      },
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
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/SLP.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/SLP.svg',
    },
    color: '#55bb93',
    categories: ['Gaming', 'NFT'],
    is_favorite: false,
  },
  {
    ticker: 'ADA',
    name: 'Cardano',
    symbol: 'ADA',
    decimals: 6,
    type: 'CRYPTO',
    actions: [
      {
        action: 'SEND',
        enabled: false,
      },
      {
        action: 'RECEIVE',
        enabled: false,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/ADA.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/ADA.svg',
    },
    color: '#0033AD',
    categories: ['Blockchain'],
    is_favorite: false,
  },
  {
    ticker: 'UNI',
    name: 'UniSwap',
    symbol: 'UNI',
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
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/UNI.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/UNI.svg',
    },
    color: '#ff007a',
    categories: ['DeFi'],
    is_favorite: false,
  },
  {
    ticker: 'CHZ',
    name: 'Chiliz',
    symbol: 'CHZ',
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
      {
        action: 'SWAP',
        enabled: false,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/CHZ.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/CHZ.svg',
    },
    color: '#FF7049',
    categories: ['Gaming', 'NFT'],
    is_favorite: false,
  },
  {
    ticker: 'XRP',
    name: 'Ripple',
    symbol: 'XRP',
    decimals: 6,
    type: 'CRYPTO',
    actions: [
      {
        action: 'SEND',
        enabled: false,
      },
      {
        action: 'RECEIVE',
        enabled: false,
      },
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/XRP.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/XRP.svg',
    },
    color: '#23292F',
    categories: ['Blockchain'],
    is_favorite: false,
  },
  {
    ticker: 'USDT',
    name: 'Tether',
    symbol: 'USDT',
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
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/USDT.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/USDT.svg',
    },
    color: '#53AE94',
    categories: ['Stablecoin'],
    is_favorite: false,
  },
  {
    ticker: 'DOGE',
    name: 'Dogecoin',
    symbol: 'DOGE',
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
    ],
    url_images: {
      image_png:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/DOGE.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/DOGE.svg',
    },
    color: '#c2a633',
    categories: ['Blockchain'],
    is_favorite: false,
  },
  {
    ticker: 'AAVE',
    name: 'Aave',
    symbol: 'AAVE',
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
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/AAVE.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/AAVE.svg',
    },
    color: '#373D51',
    categories: ['DeFi'],
    is_favorite: false,
  },
  {
    ticker: 'UBI',
    name: 'Universal Basic Income',
    symbol: 'UBI',
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
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/PNG/UBI.png',
      image_svg:
        'https://cmswagtail.s3.sa-east-1.amazonaws.com/crypto-assets/SVG/UBI.svg',
    },
    color: '#00D9A1',
    categories: ['Community'],
    is_favorite: false,
  },
]

export default currencies
