import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions.ts';

export function Header() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link">
              <img className="header__logo" src="markup/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"/>
                  {authorizationStatus === AuthorizationStatus.Auth && (
                    <>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </>
                  )}
                </Link>
              </li>
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <li className="header__nav-item">
                  <Link to={AppRoute.Root} className="header__nav-link" onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              ) : (<Link to={AppRoute.Login}><span className="header__login">Sign in</span></Link>)}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
