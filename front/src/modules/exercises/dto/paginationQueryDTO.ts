import { IsNumber, IsPositive, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationQueryDTO {
  @ApiProperty({
    example: 10,
    required: false,
  })
  @Type(() => Number)
  @IsPositive()
  limit: number;

  @ApiProperty({
    example: 1,
    required: false,
  })
  @Type(() => Number)
  @IsPositive()
  page: number;

  constructor(page = 1, limit = 10) {
    this.page = page;
    this.limit = limit;
  }
}
