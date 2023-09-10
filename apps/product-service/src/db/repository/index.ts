import { IProductsRepository } from './product/products.repository.interface';
import { ProductsTypeOrmRepository } from './product/products.typeorm.repository';

export { IProductsRepository } from './product/products.repository.interface';
export const repositoryProviders = [
  {
    provide: IProductsRepository,
    useClass: ProductsTypeOrmRepository,
  },
];
