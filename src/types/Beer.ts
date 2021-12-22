export interface Beer {
  price: string;
  name: string;
  rating: {
    average: number;
    reviews: string;
  };
  image: string;
  id: number;
}
