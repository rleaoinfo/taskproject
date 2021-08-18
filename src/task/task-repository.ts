import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TaskRepository {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,) { }

    async findall(userid: string): Promise<any> {
        console.log(userid);
        const mongoFind = await this.taskModel.find({ userId: userid, enable : true }).exec();
        return mongoFind;

    }

    async save(task: any) {
        const newTask = await new this.taskModel(task);
        return newTask.save();
    }

    async taskById(owner_id: any) {
        const username = await this.taskModel.findOne({ id: owner_id }).exec();
        return username;
    }
}
