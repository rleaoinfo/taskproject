import { v4 as uuidv4 } from 'uuid';
import { Task } from '../schemas/task.schema';

export function CreateNewTask(user: string, description: string){
    const statushistory = {
        when: new Date(),
        status: "PENDING",
      }
    const datacreate: Task = {
        taskId: uuidv4(),
        userId: user,
        description: description,
        enable: true,
        status: "PENDING",
        when: new Date(),
        status_history:[statushistory]
        ,
      }
    return datacreate;
}
