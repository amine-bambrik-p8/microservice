import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ProductSchema {
  @PrimaryGeneratedColumn() id?: number;
  @Column() name: string;
  @Column() quantity: number;
  @Column() description: string;
  @Column() createdAt: Date;
  @Column() updatedAt: Date;
  constructor(data: ProductSchema) {
    this.id = data?.id;
    this.name = data?.name;
    this.quantity = data?.quantity;
    this.description = data?.description;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
