import { Test, TestingModule } from '@nestjs/testing';
import { DealController } from './deal.controller';
import { DealService } from './deal.service';

describe('DealController', () => {
  let controller: DealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DealController],
      providers: [DealService],
    }).compile();

    controller = module.get<DealController>(DealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
