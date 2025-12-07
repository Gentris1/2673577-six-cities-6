import {useState, useCallback} from 'react';
import { ClipLoader } from 'react-spinners';
import {ListCitiesCards} from '../../components/list-cities-cards/list-cities-cards.tsx';
import CityMap from '../../components/map/map.tsx';
import {ListCities} from '../../components/list-cities/list-cities.tsx';
import {SortingOptions} from '../../components/sorting-options/sorting-options.tsx';
import {OfferListItem} from '../../types/offer-list-item.ts';
import {AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks';
import {Header} from '../../components/header/header.tsx';
import {
  selectCity,
  selectCurrentCityOffers,
  selectOffersCityCount,
  selectAppLoadingState
} from '../../store/selectors';

function MainScreen() {
  const [activeOffer, setActiveOffer] = useState<OfferListItem | null>(null);

  const handleMouseOverOffer = useCallback((offer: OfferListItem | null) => {
    setActiveOffer(offer);
  }, []);

  const cityState = useAppSelector(selectCity);
  const currentCityOffers = useAppSelector(selectCurrentCityOffers);
  const offersCount = useAppSelector(selectOffersCityCount);
  const { authStatus, offersLoading } = useAppSelector(selectAppLoadingState);

  if (offersLoading || authStatus === AuthorizationStatus.Unknown) {
    return <ClipLoader size={100} color="#4481c3" />;
  }
  return (
    <div className="page page--gray page--main">
      <Header/>

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
              <b className="places__found">{offersCount} places to stay in {cityState}</b>
              <SortingOptions/>
              <div className='cities__places-list places__list tabs__content'>
                <ListCitiesCards
                  offers={currentCityOffers}
                  handleMouseOverOffer={handleMouseOverOffer}
                  className={'cities'}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CityMap screen='main' offers={currentCityOffers} selectedOffer={activeOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
