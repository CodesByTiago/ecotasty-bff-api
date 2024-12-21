import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { DeliverersModule } from './modules/deliverers/deliverers.module';
import { UserAuthModule } from './modules/user-auth/user-auth.module';
import { CustomerAuthModule } from './modules/customer-auth/customer-auth.module';
import { DelivererAuthModule } from './modules/deliverer-auth/deliverer-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ...(process.env.NODE_ENV !== 'production'
      ? [
          ServeStaticModule.forRoot({
            rootPath: join(process.cwd(), './public'),
            exclude: ['/api/(.*)'],
          }),
        ]
      : []),
    DatabaseModule,
    UsersModule,
    ProductsModule,
    OrdersModule,
    CustomersModule,
    DeliverersModule,
    UserAuthModule,
    CustomerAuthModule,
    DelivererAuthModule,
  ],
})
export class AppModule {}
