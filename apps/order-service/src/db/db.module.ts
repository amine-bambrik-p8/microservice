import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repositoryProviders } from './repository';
import { IOrdersRepository } from './repository/order/orders.repository.interface';
import { OrderSchema } from './schemas/order/order.schema';
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
    TypeOrmModule.forFeature([OrderSchema]),
  ],
  providers: [...repositoryProviders],
  exports: [IOrdersRepository],
})
export class DbModule {}
