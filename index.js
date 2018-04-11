import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import store from './store.js';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

console.log(store.getState());