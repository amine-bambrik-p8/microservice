import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repositoryProviders } from './repository';
import { IOrdersRepository } from './repository/order/orders.repository.interface';
import { OrderSchema } from './schemas/order/order.schema';
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
    TypeOrmModule.forFeature([OrderSchema]),
  ],
  providers: [...repositoryProviders],
  exports: [IOrdersRepository],
})
export class DbModule {}
