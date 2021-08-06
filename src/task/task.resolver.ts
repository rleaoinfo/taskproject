import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TaskDTO } from './dto/task.dto';
import { Task } from './schemas/task.schema';
import { TaskService } from './task.service';

@Resolver(()=>TaskDTO)
export class TaskResolver {
    constructor(
        private readonly taskService: TaskService,
    ){}

    @Query(()=> String)
    async hello() {
      return 'hello world';
    }

    @Query(()=> TaskDTO)
    async task(@Args('name') name: string) {
      return await this.taskService.find(name);
    }

    
    //@ResolveField(returns => [RepoDTO])
    //async repos(@Parent() user:User){
    //  return this.userService.repoFind(user)
    //}
    
}

