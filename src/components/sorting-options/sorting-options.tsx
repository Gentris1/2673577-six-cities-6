import classNames from 'classnames';
import {useEffect, useState} from 'react';
import {fillListOffers} from '../../store/action.ts';
import {Offers} from '../../types/offer.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';

export function SortingOptions() {
  const listOffersState = useAppSelector((state) => state.offersCity);
  const cityState = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const [selectedSort, setSelectedSort] = useState('Popular');
  const [openedSort, setOpenedSort] = useState(false);

  const sortedOffers = (offers: Offers, sortType: string) => {
    const sorted = [...offers];
    switch (sortType) {
      case 'Price: low to high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: high to low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Top rated first':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return sorted;
  };

  useEffect(() => {
    setSelectedSort('Popular');
  }, [cityState]);

  const handleSortChange = (sortType: string) => {
    setSelectedSort(sortType);
    setOpenedSort(!openedSort);
    dispatch(fillListOffers({offersCity: sortedOffers(listOffersState, sortType)}));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenedSort(!openedSort)}>
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': openedSort})}>
        {['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'].map((option) => (
          <li
            key={option}
            className={classNames('places__option', {'places__option--active': selectedSort === option})}
            tabIndex={0}
            onClick={() => handleSortChange(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}
