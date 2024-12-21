import { Module } from '@nestjs/common';
import { DelivererAuthController } from './deliverer-auth.controller';
import { DelivererAuthService } from './deliverer-auth.service';

@Module({
  controllers: [DelivererAuthController],
  providers: [DelivererAuthService]
})
export class DelivererAuthModule {}
