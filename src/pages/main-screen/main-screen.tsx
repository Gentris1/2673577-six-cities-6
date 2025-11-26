import {useState} from 'react';
import {Link} from 'react-router-dom';
import {ListCitiesCards} from '../../components/list-cities-cards/list-cities-cards.tsx';
import CityMap from '../../components/map/map.tsx';
import {ListCities} from '../../components/list-cities/list-cities.tsx';
import {SortingOptions} from '../../components/sorting-options/sorting-options.tsx';
import {Offer, Offers} from '../../types/offer.ts';
import {AppRoute} from '../../const.ts';
import {useAppSelector} from '../../hooks';
import {Spinner} from '../../components/spinner/spinner.tsx';


type MainScreenProps = {
  offers: Offers;
}

function MainScreen({offers}: MainScreenProps) {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  const handleMouseOverOffer = (offer: Offer | null) => {
    setActiveOffer(offer);
  };

  const cityState = useAppSelector((state) => state.city);
  const groupByCity = offers.reduce<Record<string, Offers>>((acc, offer) => {
    const city = offer.city.name;
    if (acc[city] === undefined) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  if (isOffersLoading) {
    return <Spinner/>;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="markup/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListCities/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{groupByCity[cityState] ? groupByCity[cityState].length : 0} places to stay in {cityState}</b>
              <SortingOptions/>
              <div className='cities__places-list places__list tabs__content'>
                <ListCitiesCards offers={groupByCity[cityState]} handleMouseOverOffer={handleMouseOverOffer} className={'cities'}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CityMap screen='main' offers={groupByCity[cityState]} selectedOffer={activeOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
