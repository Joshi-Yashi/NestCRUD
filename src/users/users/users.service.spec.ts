import { Injectable, NotFoundException, BadRequestException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { Utils } from './utils';
import * as fs from 'fs';

export interface User {
  id: string;
  name: string;
}

@Injectable()
export class UserService {
  private filePath = 'src/users.json';

  private readUsers(): User[] {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return []; // If file doesn't exist, return empty array
    }
  }

  private writeUsers(users: User[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2));
  }

  getAll(): User[] {
    return this.readUsers();
  }

  getOne(id: string): User {
    const users = this.readUsers();
    const user = users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(dto: CreateUserDto): User {
    if (!dto.name) throw new BadRequestException('Name is required');

    const users = this.readUsers();
    const existingUser = users.find((u) => u.name === dto.name);
    if (existingUser) throw new ConflictException('User already exists');

    const newUser: User = { id: Utils.genId(), ...dto };
    users.push(newUser);
    this.writeUsers(users);

    return newUser;
  }

  update(id: string, dto: UpdateUserDto): User {
    const users = this.readUsers();
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) throw new NotFoundException('User not found');

    if (!dto.name) throw new BadRequestException('Name is required');

    users[userIndex] = { ...users[userIndex], ...dto };
    this.writeUsers(users);

    return users[userIndex];
  }

  remove(id: string): User {
    let users = this.readUsers();
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) throw new NotFoundException('User not found');

    const deletedUser = users.splice(userIndex, 1)[0];
    this.writeUsers(users);

    return deletedUser;
  }
}
