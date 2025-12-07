import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { OfferListItems } from '../types/offer-list-item';

export const selectCity = (state: State) => state.city;
export const selectOffersCity = (state: State) => state.offersCity;
export const selectOffer = (state: State) => state.offer;
export const selectOfferLoading = (state: State) => state.offerLoading;
export const selectOfferError = (state: State) => state.offerError;
export const selectOfferNeighborhood = (state: State) => state.offerNeighborhood;
export const selectReviews = (state: State) => state.reviews;
export const selectIsOffersLoading = (state: State) => state.isOffersLoading;
export const selectAuthorizationStatus = (state: State) => state.authorizationStatus;

export const selectOffersByCity = createSelector(
  [selectOffersCity],
  (offers) => offers.reduce<Record<string, OfferListItems>>((acc, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {})
);

export const selectCurrentCityOffers = createSelector(
  [selectOffersByCity, selectCity],
  (groupedOffers, city) => groupedOffers[city] || []
);

export const selectOffersCityCount = createSelector(
  [selectCurrentCityOffers],
  (offers) => offers.length
);

export const selectAppLoadingState = createSelector(
  [selectAuthorizationStatus, selectIsOffersLoading],
  (authStatus, offersLoading) => ({
    authStatus,
    offersLoading
  })
);

export const selectOfferScreenData = createSelector(
  [
    selectOffer,
    selectOfferLoading,
    selectOfferError,
    selectAuthorizationStatus,
    selectReviews,
    selectOfferNeighborhood
  ],
  (offer, loading, error, authStatus, reviews, neighborhood) => ({
    currentOffer: offer,
    offerLoading: loading,
    offerError: error,
    authorizationStatus: authStatus,
    reviews,
    offerNeighbourhood: neighborhood
  })
);
