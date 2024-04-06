import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'E-mail é um campo obrigatório.' })
  email: string;
  @IsNotEmpty({ message: 'Senha é um campo' })
  password: string;
}
