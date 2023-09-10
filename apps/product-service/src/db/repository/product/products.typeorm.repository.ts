import { Repository } from 'typeorm';
import { ProductSchema } from '../../schemas/product/product.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../../products/models/product.model';
import { IProductsRepository } from './products.repository.interface';
@Injectable()
export class ProductsTypeOrmRepository implements IProductsRepository {
  constructor(
    @InjectRepository(ProductSchema)
    private readonly productRepository: Repository<ProductSchema>
  ) {}
  async create(product: Product) {
    const newProduct = new ProductSchema({
      ...product.getData(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return new Product(await this.productRepository.save(newProduct));
  }
  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.find();
    return products.map((product) => new Product(product));
  }
  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      return undefined;
    }
    return new Product(product);
  }
  async update(id: number, product: Product) {
    await this.productRepository.update(id, {
      ...product.getData(),
      updatedAt: new Date(),
    });
  }
  async remove(id: number) {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException('Product does not exist');
    }
    await this.productRepository.delete(id);
  }
}
