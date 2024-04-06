/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import {
    IsDateString,
    IsNotEmpty,
    IsString,
    IsInt,
    IsEnum,
    IsOptional,
} from 'class-validator';
import { Priority } from 'src/common/enum/Priority.enum';
import { Status } from 'src/common/enum/Status.enum';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty({ message: 'Título é um campo obrigatório!' })
    title: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição é um campo obrigatório!' })
    description: string;

    @IsString()
    @IsOptional({ message: 'Status é um campo opcional' })
    @IsEnum(Status)
    status: Status;

    @IsDateString({}, { message: 'Use um formato de data válido.' })
    @IsNotEmpty({ message: 'Data Limite é um campo obrigatório!' })
    deadline: Date;

    @IsString()
    @IsNotEmpty({ message: 'Prioridade é um campo obrigatório!' })
    @IsEnum(Priority)
    priority: Priority;

    @IsInt({ message: 'O número deve ser inteiro.' })
    @IsNotEmpty({ message: 'ID do usuário é um campo obrigatório!' })
    @Transform(({ value }) => parseInt(value, 10))
    userId: number;
}
