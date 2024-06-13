import Coins from './routes/Coins';
import Coin from './routes/Coin';
import { createBrowserRouter } from 'react-router-dom';

// 최신 라우터 사용법
const router = createBrowserRouter([
  {
    path: '/',
    element: <Coins />,
  },
  {
    path: '/:coinId',
    element: <Coin />,
  }
]);

export default router;

/* 가장 많이 사용되는 라우터 사용법
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/:coinId' element={<Coin />}>
          <Route path='price' element={<Price />} />
          <Route path='chart' element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
*/