import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './users.controller'; // Correct Import

describe('UserController', () => { // Update describe block
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController], // Correct Class Name
    }).compile();

    controller = module.get<UserController>(UserController); // Fix Here
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
