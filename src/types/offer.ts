type Price = {
  value: number;
  text: string;
}

export type Offer = {
  id: number;
  price: Price;
  name: string;
  type: string;
  imageUrl: string;
  rating: number;
}
export type Offers = Offer[];
