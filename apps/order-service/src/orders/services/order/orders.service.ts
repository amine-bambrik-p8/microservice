import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { UpdateOrderDto } from '../../dto/update-order.dto';
import { IOrdersRepository } from '../../../db';
import { Order } from '../../models/order.model';
import { ProductsService } from '../../../products/services/product.service';
import { OrderItem } from '../../models/order-item.model';
import { OrderStatus } from '../../models/order-status.enum';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: IOrdersRepository,
    private readonly productsService: ProductsService
  ) {}
  async create(createProductDto: CreateOrderDto) {
    const products = await this.productsService.findProuctsByIds(
      createProductDto.orderItems.map((i) => i.productId)
    );

    const orderItems = await Promise.all(
      createProductDto.orderItems.map(async (i) => {
        const product = products.find((p) => p.id === i.productId);
        if (!product)
          throw new Error(`Product with id ${i.productId} not found`);
        return new OrderItem({
          productId: i.productId,
          quantity: i.quantity,
          price: product.price,
        });
      })
    );

    const newOrder = new Order({
      addressCity: createProductDto.addressCity,
      addressCountry: createProductDto.addressCountry,
      addressLineOne: createProductDto.addressLineOne,
      addressLineTwo: createProductDto.addressLineTwo,
      addressProvince: createProductDto.addressProvince,
      addressZipcode: createProductDto.addressZipcode,
      orderStatus: OrderStatus.PENDING,
      orderItems: orderItems,
    });
    return await this.ordersRepository.create(newOrder);
  }

  async findAll() {
    return (await this.ordersRepository.findAll()).map((p) => ({
      ...p.getData(),
      orderItems: p.getData().orderItems.map((i: OrderItem) => i.getData()),
    }));
  }

  async findOne(id: number) {
    const order = await this.ordersRepository.findOne(id);
    return {
      ...order.getData(),
      orderItems: order.getData().orderItems.map((i: OrderItem) => i.getData()),
    };
  }

  async update(id: number, updateProductDto: UpdateOrderDto) {
    const order = await this.ordersRepository.findOne(id);
    order.edit(updateProductDto);
    return await this.ordersRepository.update(id, order);
  }

  async remove(id: number) {
    return await this.ordersRepository.remove(id);
  }
}
