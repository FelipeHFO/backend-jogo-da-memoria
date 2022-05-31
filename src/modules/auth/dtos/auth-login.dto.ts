import { IsString } from 'class-validator';

export class AuthLoginDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
