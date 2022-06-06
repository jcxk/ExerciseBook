import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  /**
   *
   */
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  /**
   *
   */

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        exercises: true,
      },
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        exercises: true,
      },
    });
  }


  async create(user: CreateUserDto): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(user: UpdateUserDto): Promise<UpdateResult> {
    return await this.userRepository.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
