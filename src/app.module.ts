import { Module } from '@nestjs/common';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
