"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("./utils");
let UserService = class UserService {
    users = [];
    getAll() {
        return this.users;
    }
    getOne(id) {
        const user = this.users.find(u => u.id === id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    create(dto) {
        if (!dto.name)
            throw new common_1.BadRequestException('Name is required');
        const existingUser = this.users.find(u => u.name === dto.name);
        if (existingUser)
            throw new common_1.ConflictException('User already exists');
        const user = { id: utils_1.Utils.genId(), ...dto };
        this.users.push(user);
        return user;
    }
    update(id, dto) {
        const user = this.getOne(id);
        if (!dto.name)
            throw new common_1.BadRequestException('Name is required');
        Object.assign(user, dto);
        return user;
    }
    remove(id) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1)
            throw new common_1.NotFoundException('User not found');
        return this.users.splice(index, 1)[0];
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=users.service.js.map