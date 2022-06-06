type Link = {
  name: string
  to: string
  icon: string
}

const navLinks: Link[] = [
  {
    name: 'Panel',
    to: 'panel',
    icon: 'panel',
  },
  {
    name: 'Billetera',
    to: 'wallet',
    icon: 'wallet',
  },
  {
    name: 'Cotizaciones',
    to: 'market-rates',
    icon: 'market-rates',
  },
  {
    name: 'Créditos',
    to: 'credit',
    icon: 'credit',
  },
  {
    name: 'Exchange',
    to: 'exchange',
    icon: 'exchange',
  },
  {
    name: 'Launchpad',
    to: 'launchpad',
    icon: 'launchpad',
  },
]

export default navLinks
