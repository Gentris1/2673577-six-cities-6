import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {rentalOffersCount} from './const.ts';
import {offers} from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentalOffersCount={rentalOffersCount} offers={offers}/>
  </React.StrictMode>
);
