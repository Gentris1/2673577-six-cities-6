type Price = {
  value: number;
  text: string;
}

export type Coordinate = {
  latitude: number;
  longitude: number;
}

type Location = {
  city: string;
  coordinate: Coordinate;
}

export type Offer = {
  id: string;
  location: Location;
  price: Price;
  name: string;
  type: string;
  imageSrc: string;
  rating: number;
}
export type Offers = Offer[];
