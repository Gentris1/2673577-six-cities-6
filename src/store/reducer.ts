import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, loadReviews, requireAuthorization, setOffersLoadingStatus} from './action.ts';
import {OfferListItems} from '../types/offer-list-item.ts';
import {Reviews} from '../types/review.ts';
import {AuthorizationStatus} from '../const.ts';

type InitalState = {
  city: string;
  offersCity: OfferListItems;
  reviews: Reviews;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  city: 'Paris',
  offersCity: [],
  reviews: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
