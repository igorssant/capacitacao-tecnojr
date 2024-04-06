/* eslint-disable prettier/prettier */
import { Task } from 'src/modules/task/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user', orderBy: {id: 'ASC'}})
export class User {
    @PrimaryGeneratedColumn({name: 'usr_id', type: 'int'})
    id: number;
    
    @Column({name: 'usr_name', type: 'varchar', length: 255, nullable: false})
    name: string;
    
    @Column({name: 'usr_email', type: 'varchar', length: 255, nullable: false, unique: true})
    email:string;

    @Column({name: 'usr_password', type: 'varchar', length: 255, nullable: false, select: false})
    password:string;

    @OneToMany(
        () => Task,
        (task) => task.user,
        { onDelete: 'CASCADE' }
    )
    tasks: Task[];
};
