import { Injectable } from '@nestjs/common';
import { CreateNewTask } from './function/task.create';
import { TaskRepository } from './task-repository';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository) { }

  async find(userid: string): Promise<any> {
    const datafind = await this.taskRepository.findall(userid);
    return datafind;

  }

  async create(user: string, description: string): Promise<any> {
    const dataCreate = await this.taskRepository.save(CreateNewTask(user,description));
    return dataCreate;

  }


}

