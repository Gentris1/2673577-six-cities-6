import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks';

function App() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offersState = useAppSelector((state) => state.offersCity);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return (
      <ClipLoader size={100} color="#4481c3" />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offersState}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen offers={offersState}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferScreen offers={offersState}/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
