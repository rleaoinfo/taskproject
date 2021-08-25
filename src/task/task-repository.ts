import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TaskRepository {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,) { }

    async findall(userid: string): Promise<any> {
        const alltask = await this.taskModel.find({ userId: userid, enable: true }).exec();
        return alltask;

    }

    async save(task: any) {
        const newTask = await new this.taskModel(task);
        return newTask.save();
    }

    async find(userid: string, taskid: string) {
        const onetask = await this.taskModel.findOne({ userId: userid, taskId: taskid }).exec();
        return onetask;
    }

    async update(userid: string, taskid: string, description: string, when: Date) {
        if (description === undefined && when === undefined) {
            const updatetask = await this.taskModel.findOneAndUpdate({ userId: userid, taskId: taskid }, { when: new Date() });
            return updatetask;
        }
        if (when === undefined) {
            const updatetask = await this.taskModel.findOneAndUpdate({ userId: userid, taskId: taskid }, { description: description });
            return updatetask;

        }
        if (description === undefined) {
            const updatetask = await this.taskModel.findOneAndUpdate({ userId: userid, taskId: taskid }, { when: when });
            return updatetask;

        }
        //const updatetask = await this.taskModel.findOneAndUpdate({ userId: userid, taskId: taskid },{description: description,when: new Date()})
    }

    async delete(userid: string, taskid: string) {
        const deleted = await this.taskModel.findOneAndUpdate({ userId: userid, taskId: taskid, enable: true }, { enable: false });
        if(deleted === null){
            throw new BadRequestException('Task já está deletada')
        }
        return deleted;
    }

}
