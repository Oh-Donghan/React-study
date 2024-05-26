import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';
import Chart from './routes/Chart';

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coins toggleDark={toggleDark} />} />
        <Route path='/:coinId' element={<Coin />}>
          <Route path='price' element={<Price />} />
          <Route path='chart' element={<Chart isDark={isDark} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
