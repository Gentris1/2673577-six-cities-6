import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer.ts';
import {Reviews} from '../types/review.ts';

export const changeCity = createAction<{city: string}>('city/change');
export const loadOffers = createAction<{offersCity: Offers}>('listOffers/fill');
export const loadReviews = createAction<{reviews: Reviews}>('reviews/loadReviews');
export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
