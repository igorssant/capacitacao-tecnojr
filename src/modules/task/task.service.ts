import { UserService } from './../user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private readonly userService: UserService,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    await this.userService.findOne(createTaskDto.userId);
    return await this.taskRepository.save(createTaskDto);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.taskRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Tarefa não encontrada.');
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id);

    if (updateTaskDto.userId) {
      await this.userService.findOne(updateTaskDto.userId);
    }
    return await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.taskRepository.delete(id);
  }
}
