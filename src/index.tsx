import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';

const rentalOffersCount = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentalOffersCount={rentalOffersCount}/>
  </React.StrictMode>
);
