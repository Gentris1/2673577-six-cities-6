import {Offer, Offers} from '../../types/offer.ts';
import CitiesCard from '../cities-card/cities-card.tsx';

type ListCitiesCardsProps = {
  offers: Offers;
  handleMouseOverOffer?: (offer: Offer | null) => void;
  className: string;
}

export function ListCitiesCards({offers, handleMouseOverOffer, className}: ListCitiesCardsProps) {
  return (
    offers?.map((offer) => (<CitiesCard className={className} key={offer.id} offer={offer} sizeImg='large' handleMouseOverOffer={handleMouseOverOffer}/>))
  );
}
