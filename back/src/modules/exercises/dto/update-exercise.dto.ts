import { IsString, IsNotEmpty, isUUID, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateExerciseDto {
  @ApiProperty({
    example: '',
    description: 'user uuid',
  })
  @IsString()
  @IsUUID(5)
  readonly id!: string;

  @ApiProperty({
    example: '',
    description: 'user uuid',
  })
  @IsString()
  @IsUUID(5)
  readonly user_id: string;

  @ApiProperty({
    example: 'What is a good exercise?',
    description: 'Exercise content',
    maxLength: 100,
  })
  @IsString()
  readonly content: string;
}
