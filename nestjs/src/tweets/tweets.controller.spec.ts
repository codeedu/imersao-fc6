import { Test, TestingModule } from '@nestjs/testing';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';

describe('TweetsController', () => {
  let controller: TweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TweetsController],
      providers: [TweetsService],
    }).compile();

    controller = module.get<TweetsController>(TweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
