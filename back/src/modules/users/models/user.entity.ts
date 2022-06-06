import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exercise } from '../../exercises/models/exercise.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  @OneToMany(() => Exercise, (exercise) => exercise.user)
  exercises: Exercise[];
}
