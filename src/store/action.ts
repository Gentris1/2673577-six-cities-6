import {createAction} from '@reduxjs/toolkit';
import {OfferListItems} from '../types/offer-list-item.ts';
import {Reviews} from '../types/review.ts';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';

export const changeCity = createAction<{city: string}>('city/change');
export const loadOffers = createAction<{offersCity: OfferListItems}>('listOffers/fill');
export const loadOriginalOffers = createAction<{offersCity: OfferListItems}>('listOffers/fillOriginal');
export const loadReviews = createAction<{reviews: Reviews}>('reviews/loadReviews');
export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('offers/redirectToRoute');
export const loadOffer = createAction<{offer: Offer}>('offers/loadOffer');
export const loadOfferNeighborhood = createAction<{offers: OfferListItems}>('offers/loadOfferNeighborhood');
export const setOfferLoadingStatus = createAction<boolean>('offer/loading');
export const setOfferErrorStatus = createAction<boolean>('offer/error');
