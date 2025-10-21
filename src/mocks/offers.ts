import {Offer} from '../types/offer.ts';

const PlaceCardType = {
  apartment: 'Apartment',
  room: 'Room'
} as const;

export const offers: Offer[] =
  [
    {
      id: 0,
      city: 'Amsterdam',
      price: {value: 120, text: 'night'},
      name: 'Beautiful & luxurious apartment at great location',
      type: PlaceCardType.apartment,
      imageSrc: 'img/apartment-01.jpg',
      rating: 4
    },
    {
      id: 1,
      city: 'Amsterdam',
      price: {value: 80, text: 'night'},
      name: 'Wood and stone place',
      type: PlaceCardType.room,
      imageSrc: 'img/room.jpg',
      rating: 4
    },
    {
      id: 2,
      city: 'Amsterdam',
      price: {value: 132, text: 'night'},
      name: 'Canal View Prinsengracht',
      type: PlaceCardType.apartment,
      imageSrc: 'img/apartment-02.jpg',
      rating: 4
    },
    {
      id: 3,
      city: 'Amsterdam',
      price: {value: 180, text: 'night'},
      name: 'Nice, cozy, warm big bed apartment',
      type: PlaceCardType.apartment,
      imageSrc: 'img/apartment-03.jpg',
      rating: 5
    },
    {
      id: 4,
      city: 'Cologne',
      price: {value: 180, text: 'night'},
      name: 'White castle',
      type: PlaceCardType.apartment,
      imageSrc: 'img/apartment-small-04.jpg',
      rating: 5
    }
  ];
