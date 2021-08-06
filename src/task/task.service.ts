import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task-repository';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository) { }

  async find(taskid: string): Promise<any> {
    const datafind = await this.taskRepository.findTask(taskid);
    return datafind;

  }
  

}

