import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Header, 
  Navigation,
  Panel,
  Wallet,
  Credit,
  Exchange,
  Launchpad,
  MarketRates,
  NotFound
} from '../../containers';

export default function AppRouter() {
  const navLinks = ['panel','wallet','market-rates','credit','exchange','launchpad']
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <BrowserRouter>
      <Header />
      <div className='fe-wallet__content'>
        <Navigation links={navLinks} />
        <Suspense fallback={<LoadingMessage />}>
          <Routes>
            <Route path="/panel"  element={<Panel />} />
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
  );
}
