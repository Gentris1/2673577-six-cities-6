import {Offer} from '../types/offer.ts';

export const offers: Offer[] = [
  {
    id: 'cb8c7fbc-2b1e-4489-8652-123383429ff2',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 247,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.842557,
      longitude: 4.363696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1
  },
  {
    id: 'd6c7e863-5467-4052-be1f-c84790d28b15',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 349,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.4
  },
  {
    id: 'd63c2dd6-e667-40d8-8674-65677c6bbc93',
    title: 'The house among olive ',
    type: 'hotel',
    price: 267,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.5
  },
  {
    id: '4239c4d7-47d5-4707-a8ee-b56ecc58b544',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 110,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.3
  },
  {
    id: '83b14e15-83a1-4604-9c18-c7e93703bc7e',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 291,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1
  },
  {
    id: '2cd3aacb-5c6d-4737-a8e4-a9cdd38c25b8',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 395,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.5
  }
];
