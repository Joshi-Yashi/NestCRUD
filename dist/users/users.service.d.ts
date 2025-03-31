import { CreateUserDto, UpdateUserDto } from './user.dto';
export interface User {
    id: string;
    name: string;
}
export declare class UserService {
    private users;
    getAll(): User[];
    getOne(id: string): User;
    create(dto: CreateUserDto): User;
    update(id: string, dto: UpdateUserDto): User;
    remove(id: string): User;
}
