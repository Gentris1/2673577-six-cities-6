import {useState} from 'react';
import { ClipLoader } from 'react-spinners';
import {ListCitiesCards} from '../../components/list-cities-cards/list-cities-cards.tsx';
import CityMap from '../../components/map/map.tsx';
import {ListCities} from '../../components/list-cities/list-cities.tsx';
import {SortingOptions} from '../../components/sorting-options/sorting-options.tsx';
import {OfferListItem, OfferListItems} from '../../types/offer-list-item.ts';
import {AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks';
import {Header} from '../../components/header/header.tsx';

type MainScreenProps = {
  offers: OfferListItems;
}

function MainScreen({offers}: MainScreenProps) {
  const [activeOffer, setActiveOffer] = useState<OfferListItem | null>(null);

  const handleMouseOverOffer = (offer: OfferListItem | null) => {
    setActiveOffer(offer);
  };

  const cityState = useAppSelector((state) => state.city);
  const groupByCity = offers.reduce<Record<string, OfferListItems>>((acc, offer) => {
    const city = offer.city.name;
    if (acc[city] === undefined) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (isOffersLoading || authorizationStatus === AuthorizationStatus.Unknown) {
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
              <b className="places__found">{groupByCity[cityState] ? groupByCity[cityState].length : 0} places to stay
                in {cityState}
              </b>
              <SortingOptions/>
              <div className='cities__places-list places__list tabs__content'>
                <ListCitiesCards offers={groupByCity[cityState]} handleMouseOverOffer={handleMouseOverOffer}
                  className={'cities'}
                />
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
