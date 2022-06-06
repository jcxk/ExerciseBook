import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../models/exercise.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { UpdateExerciseDto } from '../dto/update-exercise.dto';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class ExerciseService {
  /**
   *
   */
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}
  /**
   *
   */

  async findAll(): Promise<Exercise[]> {
    return await this.exerciseRepository.find({
      relations: {
        user: true,
      },
      select: {
        user: {
          name: true,
        },
      },
    });
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Exercise>> {
    return paginate<Exercise>(this.exerciseRepository, options,{
      relations: {
        user: true,
      },
      select: {
        user: {
          name: true,
        },
      },
    });
  }

  async create(exercise: CreateExerciseDto): Promise<Exercise> {
    return await this.exerciseRepository.save(exercise);
  }

  async update(exercise: UpdateExerciseDto): Promise<UpdateResult> {
    return await this.exerciseRepository.update(exercise.id, exercise);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.exerciseRepository.delete(id);
  }
}
