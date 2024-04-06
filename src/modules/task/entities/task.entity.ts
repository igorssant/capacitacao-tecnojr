/* eslint-disable prettier/prettier */
import { User } from 'src/modules/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'task', orderBy: { id: 'ASC' } })
export class Task {
    @PrimaryGeneratedColumn({ name: 'task_id', type: 'int' })
    id: number;
    
    @Column({
        name: 'task_title',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    title: string;
    
    @Column({ 
        name: 'task_description',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    description: string;

    @Column( {name: 'task_status', type: 'varchar', length: 50, nullable: true, default: 'Em andamento' })
    status: string;

    @Column({
        name: 'task_deadline',
        type: 'datetime',
        nullable: false,
    })
    deadline: Date;

    @Column({
        name: 'task_priority',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    priority: string;

    @Column({
        name: 'task_usr_id',
        type: 'int',
        nullable: false,
    })
    userId: number;

    @ManyToOne(
        () => User,
        (user) => user.tasks,
        { onDelete: 'CASCADE' }
    )
    @JoinColumn({ name: 'task_usr_id' })
    user: User;
}
