import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskResolver } from './task.resolver';
import { Task, TaskSchema } from './schemas/task.schema';
import { TaskService } from './task.service';
import { TaskRepository } from './task-repository';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
    providers: [TaskResolver, TaskService, TaskRepository],
    exports: [TaskService]
})
export class UserModule { }
