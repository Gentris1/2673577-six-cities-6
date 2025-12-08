import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffer,
  loadOfferNeighborhood,
  loadOffers,
  loadOriginalOffers,
  loadReviews,
  requireAuthorization, setOfferErrorStatus, setOfferLoadingStatus,
  setOffersLoadingStatus
} from './action.ts';
import {OfferListItems} from '../types/offer-list-item.ts';
import {Reviews} from '../types/review.ts';
import {AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';

type InitalState = {
  city: string;
  offersCity: OfferListItems;
  originalOffersCity: OfferListItems;
  offer: Offer | null;
  offerLoading: boolean;
  offerError: boolean;
  offerNeighborhood: OfferListItems | null;
  reviews: Reviews;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  city: 'Paris',
  offer: null,
  offerLoading: false,
  offerError: false,
  offerNeighborhood: null,
  offersCity: [],
  originalOffersCity: [],
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
    .addCase(loadOriginalOffers, (state, action) => {
      const {offersCity} = action.payload;
      state.originalOffersCity = offersCity;
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
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.offerLoading = action.payload;
    })
    .addCase(setOfferErrorStatus, (state, action) => {
      state.offerError = action.payload;
    });
});

export {reducer};
