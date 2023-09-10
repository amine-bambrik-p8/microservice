import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repositoryProviders } from './repository';
import { IProductsRepository } from './repository/product/products.repository.interface';
import { ProductSchema } from './schemas/product/product.schema';
import { schemas } from './schemas';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mytopsecretpassword',
      database: 'postgres',
      entities: [...schemas],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProductSchema]),
  ],
  providers: [...repositoryProviders],
  exports: [IProductsRepository],
})
export class DbModule {}
