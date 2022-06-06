import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import Header from '../../components/Header'
import {
  Panel,
  Wallet,
  Credit,
  Exchange,
  Launchpad,
  MarketRates,
  NotFound,
} from '../../containers'
import { NavLinkType, CombinedState } from '../../utils/type'
import { useSelector } from 'react-redux'

/*

  Component Name: AppRouter
  Usages: 
    - Router using BrowserRouter
    
*/

export default function AppRouter() {
  const navLinks: NavLinkType = useSelector(
    (state: CombinedState) => state.NavLinkReducer,
  )

  const LoadingMessage = () => <div>Loading...</div>

  return (
    <BrowserRouter>
      <Header />
      <div className="fe-wallet__content">
        <Suspense fallback={<LoadingMessage />}>
          <Navigation links={navLinks} />
          <Routes>
            <Route path="/" element={<Panel />} />
            <Route path="/fe-wallet" element={<Panel />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/market-rates" element={<MarketRates />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}
