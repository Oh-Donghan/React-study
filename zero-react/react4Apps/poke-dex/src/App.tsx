import { BrowserRouter } from 'react-router-dom';
import PageHeader from './Common/PageHeader';
import PageNavigator from './PageNavigator';
import { Provider } from 'react-redux';
import { store } from './Store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader />
        <PageNavigator />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
