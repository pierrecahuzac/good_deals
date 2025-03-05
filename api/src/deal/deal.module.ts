import { Module } from '@nestjs/common';
import { DealService } from './deal.service';
import { DealController } from './deal.controller';

@Module({
  controllers: [DealController],
  providers: [DealService],
})
export class DealModule {}
