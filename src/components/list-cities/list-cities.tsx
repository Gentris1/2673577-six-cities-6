import classNames from 'classnames';
import {Offers} from '../../types/offer.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity, fillListOffers} from '../../store/action.ts';

type ListCitiesProps = {
  groupByCity: Record<string, Offers>;
}

export function ListCities(props: ListCitiesProps) {
  const cityState = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const handleUserAnswer = (city: string, offers: Offers) => {
    dispatch(changeCity({city: city}));
    dispatch(fillListOffers({offersCity: offers}));
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.keys(props.groupByCity).map((city) => (
        <li key={city} className="locations__item">
          <a className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': cityState === city,})}
            onClick={() => handleUserAnswer(city, props.groupByCity[city])}
            href="#"
          >
            <span>{city}</span>
          </a>;
        </li>
      ))}
    </ul>
  );
}
