export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferListItem = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type OfferListItems = OfferListItem[];
