import { IOrdersRepository } from './order/orders.repository.interface';
import { OrdersTypeOrmRepository } from './order/orders.typeorm.repository';

export { IOrdersRepository } from './order/orders.repository.interface';
export const repositoryProviders = [
  {
    provide: IOrdersRepository,
    useClass: OrdersTypeOrmRepository,
  },
];
