import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffer,
  loadOfferNeighborhood,
  loadOffers,
  loadReviews,
  requireAuthorization,
  setOffersLoadingStatus
} from './action.ts';
import {OfferListItems} from '../types/offer-list-item.ts';
import {Reviews} from '../types/review.ts';
import {AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';

type InitalState = {
  city: string;
  offersCity: OfferListItems;
  offer: Offer | null;
  offerNeighborhood: OfferListItems | null;
  reviews: Reviews;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  city: 'Paris',
  offer: null,
  offerNeighborhood: null,
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
    })
    .addCase(loadOffer, (state, action) => {
      const {offer} = action.payload;
      state.offer = offer;
    })
    .addCase(loadOfferNeighborhood, (state, action) => {
      const {offers} = action.payload;
      state.offerNeighborhood = offers;
    });
});

export {reducer};
