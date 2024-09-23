import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsAlpha()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
