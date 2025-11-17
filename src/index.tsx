import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import App from './components/app/app.tsx';
import {offers} from './mocks/offers.ts';
import {reviews} from './mocks/reviews.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
