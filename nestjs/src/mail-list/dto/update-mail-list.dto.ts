import { PartialType } from '@nestjs/mapped-types';
import { CreateMailListDto } from './create-mail-list.dto';

export class UpdateMailListDto extends PartialType(CreateMailListDto) {}
