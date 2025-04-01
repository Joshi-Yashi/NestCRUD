import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
