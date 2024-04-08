import React from "react";
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules/index";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
