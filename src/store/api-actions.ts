import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {OfferListItems} from '../types/offer-list-item.ts';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const.ts';
import {loadOffers, loadReviews, redirectToRoute, requireAuthorization, setOffersLoadingStatus} from './action.ts';
import {Reviews} from '../types/review.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'listOffers/fill',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<OfferListItems>(APIRoute.Offers);
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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
