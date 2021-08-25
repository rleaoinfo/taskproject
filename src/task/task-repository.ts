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
    }

    async delete(userid: string, taskid: string) {
        const deleted = await this.taskModel.findOneAndUpdate({ userId: userid, taskId: taskid, enable: true }, { enable: false });
        if (deleted === null) {
            throw new BadRequestException('Task já está deletada')
        }
        return deleted;
    }

    async updatestatus(taskid: string, newStatus: string) {
        const task = await this.taskModel.findOne({ taskId: taskid, enable: true }).exec()
        if (task === null) {
            throw new BadRequestException('Task não encontrada')
        } else {
            const taskJson = task.toJSON() as Task
            console.log(newStatus, taskJson.status)
            if (newStatus === "COMPLETED") {
                if (taskJson.status === "COMPLETED" || taskJson.status === "CANCELED") {
                    throw new BadRequestException('Task não pode ser modificada')
                } else {
                    const updated = await task.updateOne({ status: newStatus }, { new: true })
                    console.log(task)
                    return task
                }
            }
            else if (newStatus === "PENDING") {
                if (taskJson.status === "COMPLETED" || taskJson.status === "CANCELED") {
                    const updated = await task.updateOne({ status: newStatus }, { new: true })
                    console.log(updated)
                    return updated
                } else {
                    throw new BadRequestException('Task não pode ser modificada')
                }
            }
            else if (newStatus === "CANCELED") {
                console.log("aqui")
                if (taskJson.status === "CANCELED") {
                    throw new BadRequestException('Task não pode ser modificada')
                }
                else {
                    const updated = await task.updateOne({ status: newStatus }, { new: true })
                    return updated
                }
            }
            else{
                throw new BadRequestException('Status não existente')
            }
        }
    }

    async updatestatusarray(taskid: string, newStatus: string) {
        const task = await this.taskModel.findOne({ taskId: taskid, enable: true }).exec()
        if (task === null) {
            throw new BadRequestException('Task não encontrada')
        } else {
            const taskJson = task.toJSON() as Task
            if (taskJson.status === "COMPLETED" || taskJson.status === " CANCELED") {
                task.updateOne({ status: "PENDING" })
                return task;
            } else {
                throw new BadRequestException('Task não pode ser modificada')
            }
        }
        //const updatetask = await this.taskModel.findOneAndUpdate({ userId: userid, taskId: taskid },{description: description,when: new Date()})
    }

}
