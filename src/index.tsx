import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import App from './components/app/app.tsx';
import {fetchOfferAction} from './store/api-actions.ts';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
