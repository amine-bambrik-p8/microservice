import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItemSchema } from '../order-item/order-item.schema';
import { OrderStatus } from '../../../orders/models/order-status.enum';
@Entity()
export class OrderSchema {
  @PrimaryGeneratedColumn() id?: number;
  @Column() addressLineOne: string;
  @Column({
    nullable: true,
  })
  addressLineTwo?: string;
  @Column() addressCity: string;
  @Column() addressProvince: string;
  @Column() addressZipcode: string;
  @Column() addressCountry: string;
  @OneToMany(() => OrderItemSchema, (orderItem) => orderItem.order, {
    eager: true,
  })
  orderItems: OrderItemSchema[];
  @Column({
    type: 'enum',
    enum: OrderStatus,
  })
  orderStatus: OrderStatus;
  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;

  constructor(data: OrderSchema) {
    this.id = data?.id;
    this.addressCity = data?.addressCity;
    this.addressLineOne = data?.addressLineOne;
    this.addressLineTwo = data?.addressLineTwo;
    this.addressProvince = data?.addressProvince;
    this.addressZipcode = data?.addressZipcode;
    this.addressCountry = data?.addressCountry;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
    this.orderStatus = data?.orderStatus;
    this.orderItems = data?.orderItems.map((i) => new OrderItemSchema(i));
  }
}
