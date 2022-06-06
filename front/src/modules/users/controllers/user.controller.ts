import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  /**
   *
   */
  constructor(private usersService: UsersService) {}

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('create')
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: User,
  })
  @ApiBadRequestResponse({ description: 'User cannot register. Try again!' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: User,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
    //return createUserDto;
  }
  /*
  @Put(':id/update')
  async update(@Body() updateUserDto: UpdateUserDto): Promise<any> {
    console.log('Update #' + updateUserDto.id);
    return this.usersService.update(updateUserDto);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.usersService.delete(id);
  }

   */
}
