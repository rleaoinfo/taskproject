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

    @Mutation(()=> TaskDTO)
    async create(@Args('userid') userid: string,
                 @Args('description') description: string,){
      const dataCreate =  await this.taskService.create(userid,description)
      return dataCreate;
    }

    //@ResolveField(returns => [RepoDTO])
    //async repos(@Parent() user:User){
    //  return this.userService.repoFind(user)
    //}
    
}

