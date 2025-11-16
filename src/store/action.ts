import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer.ts';

export const changeCity = createAction<{city: string}>('city/change');
export const fillListOffers = createAction<{offersCity: Offers}>('listOffers/fill');
