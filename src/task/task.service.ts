import { Injectable } from '@nestjs/common';
import { Task } from './schemas/task.schema';
import { TaskRepository } from './task-repository';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository) { }

  async find(taskid: string): Promise<any> {
    const datafind = await this.taskRepository.findTask(taskid);
    return datafind;

  }

  async create(user: string, description: string): Promise<any> {
    
    const datacreate: Task = {
      taskId: "teste",
      userId: user,
      description: description,
      enable: true,
      when: new Date(),
      status_history: {
        when: new Date(),
        status: "PENDING",
      },
    }
    const dataCreate = await this.taskRepository.save(datacreate);
    return dataCreate;

  }


}

