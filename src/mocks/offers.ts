import {Offer} from '../types/offer.ts';

const PlaceCardType = {
  apartment: 'Apartment',
  room: 'Room'
} as const;

export const offers: Offer[] =
  [
    {
      id: '0',
      location: {
        city: 'Amsterdam',
        coordinate: {latitude: 52.3909553943508, longitude: 4.85309666406198}
      },
      price: {value: 120, text: 'night'},
      name: 'Beautiful & luxurious apartment at great location',
      type: PlaceCardType.apartment,
      imageSrc: 'img/apartment-01.jpg',
      rating: 4
    },
    {
      id: '1',
      location: {
        city: 'Amsterdam',
        coordinate: {latitude: 52.3609553943508, longitude: 4.85309666406198}
      },
      price: {value: 80, text: 'night'},
      name: 'Wood and stone place',
      type: PlaceCardType.room,
      imageSrc: 'img/room.jpg',
      rating: 4
    },
    {
      id: '2',
      location: {
        city: 'Amsterdam',
        coordinate: {latitude: 52.3909553943508, longitude: 4.929309666406198}
      },
      price: {value: 132, text: 'night'},
      name: 'Canal View Prinsengracht',
      type: PlaceCardType.apartment,
      imageSrc: 'img/apartment-02.jpg',
      rating: 4
    },
    {
      id: '3',
      location: {
        city: 'Amsterdam',
        coordinate: {latitude: 52.3809553943508, longitude: 4.939309666406198}
      },
      price: {value: 180, text: 'night'},
      name: 'Nice, cozy, warm big bed apartment',
      type: PlaceCardType.apartment,
      imageSrc: 'img/apartment-03.jpg',
      rating: 5
    },
    {
      id: '4',
      location: {
        city: 'Cologne',
        coordinate: {latitude: 0, longitude: 0}
      },
      price: {value: 180, text: 'night'},
      name: 'White castle',
      type: PlaceCardType.apartment,
      imageSrc: 'img/apartment-small-04.jpg',
      rating: 5
    }
  ];
