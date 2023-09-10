import { Order } from '../../../orders/models/order.model';

export abstract class IOrdersRepository {
  abstract create(order: Order): Promise<Order>;
  abstract update(id: number, order: Partial<Order>): Promise<void>;
  abstract remove(id: number): Promise<void>;
  abstract findAll(): Promise<Order[]>;
  abstract findOne(id: number): Promise<Order>;
}
