import {
    Injectable,
    NotFoundException,
    BadRequestException,
    ConflictException
  } from '@nestjs/common';
  import { CreateUserDto, UpdateUserDto } from './user.dto';
  import { Utils } from './utils';
  
  export interface User {
    id: string;
    name: string;
  }
  
  @Injectable()
  export class UserService {
    private users: User[] = [];
  
    getAll(): User[] {
      return this.users;
    }
  
    getOne(id: string): User {
      const user = this.users.find(u => u.id === id);
      if (!user) throw new NotFoundException('User not found'); // 404
      return user;
    }
  
    create(dto: CreateUserDto): User {
      if (!dto.name) throw new BadRequestException('Name is required'); // 400
  
      const existingUser = this.users.find(u => u.name === dto.name);
      if (existingUser) throw new ConflictException('User already exists'); // 409
  
      const user: User = { id: Utils.genId(), ...dto };
      this.users.push(user);
      return user;
    }
  
    update(id: string, dto: UpdateUserDto): User {
      const user = this.getOne(id); // Throws 404 if not found
      if (!dto.name) throw new BadRequestException('Name is required'); // 400
      Object.assign(user, dto);
      return user;
    }
  
    remove(id: string): User {
      const index = this.users.findIndex(u => u.id === id);
      if (index === -1) throw new NotFoundException('User not found'); // 404
      return this.users.splice(index, 1)[0];
    }
  }
  