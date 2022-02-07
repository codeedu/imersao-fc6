import { Test, TestingModule } from '@nestjs/testing';
import { MailListController } from './mail-list.controller';
import { MailListService } from './mail-list.service';

describe('MailListController', () => {
  let controller: MailListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailListController],
      providers: [MailListService],
    }).compile();

    controller = module.get<MailListController>(MailListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
