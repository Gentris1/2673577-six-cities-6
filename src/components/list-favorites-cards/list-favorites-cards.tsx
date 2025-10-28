import {Offers} from '../../types/offer.ts';
import CitiesCard from '../cities-card/cities-card.tsx';

type ListFavoritesCardsProps = {
  offers: Offers;
}

export function ListFavoritesCards({offers}: ListFavoritesCardsProps) {
  const groupByCity = offers.reduce<Record<string, Offers>>((acc, offer) => {
    const city = offer.location.city;
    if (acc[city] === undefined) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});
  return (
    <ul className="favorites__list">
      {Object.keys(groupByCity).map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {groupByCity[city].map((offer) => (
              <CitiesCard key={offer.id} offer={offer} className={'favorites'} sizeImg='small'/>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
