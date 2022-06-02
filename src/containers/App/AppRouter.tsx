import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import {
  Panel,
  Wallet,
  Credit,
  Exchange,
  Launchpad,
  MarketRates,
  NotFound
} from '../../containers';
import { NavLinkType, CombinedState } from '../../utils/type'
import { useSelector } from 'react-redux';

export default function AppRouter() {
  const navLinks:NavLinkType  = useSelector((state:CombinedState) => state.NavLinkReducer);
  
  const LoadingMessage = () => <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Header />
      <div className='fe-wallet__content'>
        <Suspense fallback={<LoadingMessage />}>
          <Navigation links={navLinks} />
          <Routes>
            <Route path="/panel"  element={<Panel />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/market-rates" element={<MarketRates />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/panel" />}/>  
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
