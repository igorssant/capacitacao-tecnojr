/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsString({message: 'Nome deve ser uma String.'})
    @IsNotEmpty({ message: 'Nome é um campo obrigatório!' })
    name: string;
    
    @IsString({message: 'E-mail deve ser uma String.'})
    @IsEmail({}, {message: 'E-mail deve ser do tipo Usuario@email.com'})
    @IsNotEmpty({ message: 'E-mail é um campo obrigatório!' })
    email: string;
    
    @IsString({message: 'Senha deve ser uma String.'})
    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: 'E-mail deve ser uma String.'
    })
    @IsNotEmpty({ message: 'Senha é um campo obrigatório!' })
    password: string;
};
