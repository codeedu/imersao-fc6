import { PartialType } from '@nestjs/mapped-types';
import { CreateTweetDto } from './create-tweet.dto';

export class UpdateTweetDto extends PartialType(CreateTweetDto) {}
