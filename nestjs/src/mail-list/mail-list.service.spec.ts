import { Test, TestingModule } from '@nestjs/testing';
import { MailListService } from './mail-list.service';

describe('MailListService', () => {
  let service: MailListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailListService],
    }).compile();

    service = module.get<MailListService>(MailListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
