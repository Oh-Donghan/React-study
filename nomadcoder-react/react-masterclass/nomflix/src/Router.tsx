import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import Header from './components/Header';

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tv' element={<Tv />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
