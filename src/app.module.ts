import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';

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
  ],
})
export class AppModule {}
