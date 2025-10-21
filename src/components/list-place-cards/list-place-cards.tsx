import {Offers} from '../../types/offer.ts';
import PlaceCard from '../place-card/place-card.tsx';
import {useState} from 'react';

type ListPlaceCardsProps = {
  offers: Offers;
}

export function ListPlaceCards({offers}: ListPlaceCardsProps) {
  const [activeOffer, setActiveOffer] = useState();
  return (
    <>
      {offers.map((offer) => (<PlaceCard key={offer.id} offer={offer}/>))}
    </>
  );
}
