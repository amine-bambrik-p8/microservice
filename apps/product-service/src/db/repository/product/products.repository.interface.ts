import { Product } from '../../../products/models/product.model';

export abstract class IProductsRepository {
  abstract create(product: Product): Promise<Product>;
  abstract update(id: number, product: Partial<Product>): Promise<void>;
  abstract remove(id: number): Promise<void>;
  abstract findAll(): Promise<Product[]>;
  abstract findOne(id: number): Promise<Product>;
}
