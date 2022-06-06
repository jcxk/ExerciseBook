import { Module } from '@nestjs/common';
import { ExerciseService } from './services/exercise.service';
import { ExerciseController } from './controllers/exercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './models/exercise.entity';
import { UsersService } from '../users/services/users.service';
import { User } from '../users/models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, User])],
  providers: [ExerciseService, UsersService],
  controllers: [ExerciseController],
})
export class ExercisesModule {}
