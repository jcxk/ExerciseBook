import {IsString, IsUUID, MaxLength} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExerciseDto {
  @ApiProperty({
    example: '',
    description: 'user uuid',
  })
  @IsString()
  readonly user_id: string;

  @ApiProperty({
    example: 'What is a good exercise?',
    description: 'Exercise content',
    maxLength: 100,
  })
  @IsString()
  @MaxLength(100)
  readonly content: string;
}
