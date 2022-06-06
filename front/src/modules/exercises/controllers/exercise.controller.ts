import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise.entity';
import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../../users/services/users.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { PaginationQueryDTO } from '../dto/paginationQueryDTO';

const MAX_EXERCISES_BY_USER= 10;

@ApiTags('exercises')
@Controller('exercises')
export class ExerciseController {
  /**
   *
   */
  constructor(
    private exerciseService: ExerciseService,
    private userService: UsersService,
  ) {}

  @ApiCreatedResponse({
    description: 'Get all exercises',
  })
  @Get('')
  async index(

    @Query()
    paginationQueryDTO: PaginationQueryDTO,
    // @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    // @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<Exercise>> {
    const { limit, page } = paginationQueryDTO;
    return this.exerciseService.paginate({
      page,
      limit: limit > 100 ? 100 : limit,
      route: 'http://localhost:3000/exercises',
    });
  }

  @Post('create')
  @ApiCreatedResponse({
    description: 'Created exercise object as response',
    type: Exercise,
  })
  async create(@Body() createExerciseDto: CreateExerciseDto): Promise<any> {
    const user = await this.userService.findOne(createExerciseDto.user_id);
    const exerciseCount = user.exercises.length;
    if (exerciseCount > MAX_EXERCISES_BY_USER) {
      throw new HttpException(
        'Max Index by user reached',
        HttpStatus.FORBIDDEN,
      );
    }
    return this.exerciseService.create(createExerciseDto);
  }
  /*
  @Put(':id/update')
  async update(
    @Param('id') id,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ): Promise<any> {
    console.log('Update #' + updateExerciseDto.id);
    return this.exerciseService.update(updateExerciseDto);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.exerciseService.delete(id);
  }

 */
}
