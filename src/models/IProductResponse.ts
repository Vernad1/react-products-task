import { IProduct } from "./IProduct";

export default interface IProductResponse {
  total: number;
  products: IProduct[];
}
