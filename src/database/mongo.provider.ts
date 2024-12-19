import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const MongoProvider = MongooseModule.forRootAsync({
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: `mongodb://${configService.get<string>('MONGO_HOST')}:${configService.get<string>('MONGO_PORT')}`,
    user: configService.get<string>('MONGO_USER'),
    pass: configService.get<string>('MONGO_PASSWORD'),
    dbName: configService.get<string>('MONGO_DB'),
  }),
});
