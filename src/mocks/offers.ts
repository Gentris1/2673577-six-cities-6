import {Offer} from '../offer.ts';

const PlaceCardType = {
  apartment: 'Apartment',
  room: 'Room'
} as const;

export const offers: Offer[] =
  [
    {
      id: 0,
      price: {value: 120, text: 'night'},
      name: 'Beautiful &amp; luxurious apartment at great location',
      type: PlaceCardType.apartment,
      imageUrl: 'img/apartment-01.jpg',
      rating: 4
    },
    {
      id: 1,
      price: {value: 80, text: 'night'},
      name: 'Wood and stone place',
      type: PlaceCardType.room,
      imageUrl: 'img/room.jpg',
      rating: 4
    },
    {
      id: 2,
      price: {value: 132, text: 'night'},
      name: 'Canal View Prinsengracht',
      type: PlaceCardType.apartment,
      imageUrl: 'img/apartment-02.jpg',
      rating: 4
    },
    {
      id: 3,
      price: {value: 180, text: 'night'},
      name: 'Nice, cozy, warm big bed apartment',
      type: PlaceCardType.apartment,
      imageUrl: 'img/apartment-03.jpg',
      rating: 5
    }
  ];
