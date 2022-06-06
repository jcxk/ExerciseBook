import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/models/user.entity';
import {ApiHideProperty, ApiProperty} from '@nestjs/swagger';
@Entity({ schema: 'public' })
export class Exercise {
  @ApiProperty({
    type: String,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
  })
  @Column({ type: 'uuid' })
  user_id: string;

  @ApiProperty({
    type: String,
  })
  @Column({ type: 'text' })
  content: string;

  @ApiHideProperty()
  @ManyToOne((type) => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty({
    type: String,
  })
  @CreateDateColumn()
  created_at: Date;
}
