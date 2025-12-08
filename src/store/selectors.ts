import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { OfferListItems } from '../types/offer-list-item';

const EMPTY_ARRAY: OfferListItems = [];

export const selectCity = (state: State) => state.city;
export const selectOffersCity = (state: State) => state.offersCity;
export const selectOriginalOffersCity = (state: State) => state.originalOffersCity;
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
  (groupedOffers, city) => groupedOffers[city] || EMPTY_ARRAY
);

export const selectOriginalOffersByCity = createSelector(
  [selectOriginalOffersCity],
  (offers) => offers.reduce<Record<string, OfferListItems>>((acc, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {})
);

export const selectCurrentCityOffersForMap = createSelector(
  [selectOriginalOffersByCity, selectCity],
  (groupedOffers, city) => groupedOffers[city] || EMPTY_ARRAY
);

export const selectOffersCityCountStable = createSelector(
  [selectCurrentCityOffersForMap],
  (offers) => offers.length
);

export const selectAppLoadingState = createSelector(
  [selectAuthorizationStatus, selectIsOffersLoading],
  (authStatus, offersLoading) => ({
    authStatus,
    offersLoading
  })
);
