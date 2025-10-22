type Price = {
  value: number;
  text: string;
}

export type Offer = {
  id: number;
  city: string;
  price: Price;
  name: string;
  type: string;
  imageSrc: string;
  rating: number;
}
export type Offers = Offer[];
