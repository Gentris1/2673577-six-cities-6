import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action.ts';
import {CITIES} from '../../const.ts';

export function ListCities() {
  const cityState = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const handleUserAnswer = (city: string) => {
    dispatch(changeCity({city: city}));
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.values(CITIES).map((city) => (
        <li key={city} className="locations__item">
          <a className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': cityState === city,})}
            onClick={() => handleUserAnswer(city)}
            href="#"
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
