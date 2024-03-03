export default interface IPizzaType {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
}
