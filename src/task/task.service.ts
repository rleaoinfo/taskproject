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

  async findOne(userid: string , taskid: string){
    const datafind = await this.taskRepository.find(userid,taskid);
    return datafind;
  }

  async update(userid: string , taskid: string, description: string, when: Date){
    const dataupdate = await this.taskRepository.update(userid,taskid,description,when);
    return dataupdate;
  }

  async delete(userid: string , taskid: string){
    const datadelete = await this.taskRepository.delete(userid,taskid);
    return datadelete;
  }

}

