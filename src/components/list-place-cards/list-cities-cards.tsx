import {Offer, Offers} from '../../types/offer.ts';
import CitiesCard from '../cities-card/cities-card.tsx';

type ListCitiesCardsProps = {
  offers: Offers;
  handleMouseOverOffer: (offer: Offer | null) => void;
}

export function ListCitiesCards({offers, handleMouseOverOffer}: ListCitiesCardsProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<CitiesCard key={offer.id} offer={offer} handleMouseOverOffer={handleMouseOverOffer}/>))}
    </div>
  );
}
