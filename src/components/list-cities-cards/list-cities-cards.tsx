import {OfferListItem, OfferListItems} from '../../types/offer-list-item.ts';
import CitiesCard from '../cities-card/cities-card.tsx';

type ListCitiesCardsProps = {
  offers: OfferListItems;
  handleMouseOverOffer?: (offer: OfferListItem | null) => void;
  className: string;
}

export function ListCitiesCards({offers, handleMouseOverOffer, className}: ListCitiesCardsProps) {
  return (
    offers?.map((offer) => (<CitiesCard className={className} key={offer.id} offer={offer} sizeImg='large' handleMouseOverOffer={handleMouseOverOffer}/>))
  );
}
