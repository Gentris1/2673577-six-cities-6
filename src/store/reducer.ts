import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillListOffers} from './action.ts';
import {Offers} from '../types/offer.ts';
import {offers} from '../mocks/offers.ts';


const initialState: { city: string; offersCity: Offers } = {
  city: 'Paris',
  offersCity: offers.filter((offer) => offer.city.name === 'Paris')
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(fillListOffers, (state, action) => {
      const {offersCity} = action.payload;
      state.offersCity = offersCity;
    });
});

export {reducer};
