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
  
  async create(user : string, description : string): Promise<any> {
    let datacreate = new Task;
    datacreate.userId = user;
    datacreate.description = description;
    datacreate.enable = true;
    datacreate.status_history.status = "PENDING";
    const dataCreate = await this.taskRepository.save(datacreate);
    return dataCreate;

  }
  

}

