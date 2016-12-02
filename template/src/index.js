import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './configure-store';
import Main from './main';

const store = configureStore();

render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
