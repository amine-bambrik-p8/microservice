import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repositoryProviders } from './repository';
import { IProductsRepository } from './repository/product/products.repository.interface';
import { ProductSchema } from './schemas/product/product.schema';
import { schemas } from './schemas';
import { DbConfigService } from './services/db-config/db-config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DbConfigService.getDbHost(),
      port: DbConfigService.getDbPort(),
      username: DbConfigService.getDbUsername(),
      password: DbConfigService.getDbPassword(),
      database: DbConfigService.getDbName(),
      entities: [...schemas],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProductSchema]),
  ],
  providers: [...repositoryProviders],
  exports: [IProductsRepository],
})
export class DbModule {}
