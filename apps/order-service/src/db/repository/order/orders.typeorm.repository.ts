import { Repository } from 'typeorm';
import { OrderSchema } from '../../schemas/order/order.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../../../orders/models/order.model';
import { IOrdersRepository } from './orders.repository.interface';
import { OrderItemSchema } from '../../schemas/order-item/order-item.schema';
import { OrderItem } from '../../../orders/models/order-item.model';
@Injectable()
export class OrdersTypeOrmRepository implements IOrdersRepository {
  constructor(
    @InjectRepository(OrderSchema)
    private readonly orderRepository: Repository<OrderSchema>
  ) {}
  async create(order: Order) {
    const newOrder = new OrderSchema({
      ...order.getData(),
      orderItems: order
        .getData()
        .orderItems.map((i: OrderItem) => new OrderItemSchema(i.getData())),
    });
    const newSavedOrder = await this.orderRepository.save(newOrder);

    return new Order(newSavedOrder);
  }
  async findAll(): Promise<Order[]> {
    const orders = await this.orderRepository.find();
    return orders.map((order) => new Order(order));
  }
  async findOne(id: number) {
    const order = await this.orderRepository.findOne({ where: { id } });
    if (!order) {
      return undefined;
    }
    return new Order(order);
  }
  async update(id: number, order: Order) {
    const { orderItems, ...orderData } = order.getData();
    await this.orderRepository.update(id, {
      ...orderData,
    });
  }
  async remove(id: number) {
    const order = await this.findOne(id);
    if (!order) {
      throw new NotFoundException('Order does not exist');
    }
    await this.orderRepository.delete(id);
  }
}
