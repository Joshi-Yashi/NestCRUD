import { UserService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './users.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(): User[];
    getOne(id: string): User;
    create(dto: CreateUserDto): User;
    update(id: string, dto: UpdateUserDto): User;
    patch(id: string, dto: UpdateUserDto): User;
    remove(id: string): User;
}
