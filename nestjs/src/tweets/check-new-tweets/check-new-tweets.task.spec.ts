import { Test, TestingModule } from '@nestjs/testing';
import { CheckNewTweetsTask } from './check-new-tweets.task';

describe('CheckNewTweetsTask', () => {
  let service: CheckNewTweetsTask;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckNewTweetsTask],
    }).compile();

    service = module.get<CheckNewTweetsTask>(CheckNewTweetsTask);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
