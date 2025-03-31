import {
    Controller,
    Post,
    Get,
    Body,
    Param,
    Put,
    Patch,
    Delete
  } from '@nestjs/common';
  import { UserService } from './users.service';
  import { CreateUserDto, UpdateUserDto } from './user.dto';
  import { User } from './users.service'; // ✅ Correct Import
  
  @Controller('users')
  export class UserController {
    constructor(private userService: UserService) {}
  
    @Get()
    getAll(): User[] {
      return this.userService.getAll();
    }
  
    @Get(':id')
    getOne(@Param('id') id: string): User {
      return this.userService.getOne(id);
    }
  
    @Post()
    create(@Body() dto: CreateUserDto): User {
      return this.userService.create(dto);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateUserDto): User {
      return this.userService.update(id, dto);
    }
  
    @Patch(':id')
    patch(@Param('id') id: string, @Body() dto: UpdateUserDto): User {
      return this.userService.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): User {
      return this.userService.remove(id);
    }
  }
  