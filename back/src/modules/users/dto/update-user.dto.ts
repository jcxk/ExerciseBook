import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    example: '',
    description: 'user uuid',
  })
  @IsString()
  @IsUUID(5)
  readonly id!: string;

  @ApiProperty({
    example: 'John doe',
    description: 'User Full name',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly name!: string;
}
