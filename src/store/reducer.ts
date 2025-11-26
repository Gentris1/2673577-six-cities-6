import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, loadReviews, setOffersLoadingStatus} from './action.ts';
import {Offers} from '../types/offer.ts';
import {Reviews} from '../types/review.ts';


const initialState: { city: string; offersCity: Offers; reviews: Reviews; isOffersLoading: boolean } = {
  city: 'Paris',
  offersCity: [],
  reviews: [],
  isOffersLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(loadOffers, (state, action) => {
      const {offersCity} = action.payload;
      state.offersCity = offersCity;
    })
    .addCase(loadReviews, (state, action) => {
      const {reviews} = action.payload;
      state.reviews = reviews;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {reducer};
