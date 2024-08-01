import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';

// * 이전 방식의 라우터
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

// * 최신 라우터
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
