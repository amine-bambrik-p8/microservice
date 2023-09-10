import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { OrderSchema } from '../order/order.schema';
@Entity()
export class OrderItemSchema {
  @PrimaryGeneratedColumn() id?: number;
  @Column() quantity: number;
  @Column() price: number;
  @Column() productId: number;
  @ManyToOne(() => OrderSchema, (order) => order.orderItems)
  order?: OrderSchema;

  constructor(data: OrderItemSchema) {
    this.id = data?.id;
    this.quantity = data?.quantity;
    this.productId = data?.productId;
    this.price = data?.price;
    this.order = data?.order;
  }
}
