import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offers} from '../types/offer.ts';
import {APIRoute} from '../const.ts';
import {loadOffers, loadReviews, setOffersLoadingStatus} from './action.ts';
import {Reviews} from '../types/review.ts';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'listOffers/fill',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers({ offersCity: data }));
  },
);

export const fetchReviewAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchReviews',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${_arg}`);
    dispatch(loadReviews({ reviews: data }));
  },
);
