import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TaskRepository {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,) { }

    async findTask(userid: string): Promise<any> {
        const mongoFind = await this.taskModel.findOne({ userId: userid }).exec();
        return mongoFind;

    }

    save(task: any) {
        const newTask = new this.taskModel(task);
        return newTask.save();
    }

    async taskById(owner_id: any) {
        const username = await this.taskModel.findOne({ id: owner_id }).exec();
        return username;
    }
}
