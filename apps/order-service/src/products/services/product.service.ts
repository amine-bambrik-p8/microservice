import { Product } from '../models/product.model';

export class ProductsService {
  async findProuctsByIds(ids: number[]): Promise<Product[]> {
    return [
      new Product({
        id: 1,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 100,
      }),
    ];
  }
}
