import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { IProductsRepository } from '../../../db';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: IProductsRepository) {}
  async create(createProductDto: CreateProductDto) {
    const newProduct = new Product({
      ...createProductDto,
    });
    return await this.productsRepository.create(newProduct);
  }

  async findAll() {
    return (await this.productsRepository.findAll()).map((p) => p.getData());
  }

  async findOne(id: number) {
    return (await this.productsRepository.findOne(id)).getData();
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOne(id);
    product.edit(updateProductDto);
    return await this.productsRepository.update(id, product);
  }

  async remove(id: number) {
    return await this.productsRepository.remove(id);
  }
}
