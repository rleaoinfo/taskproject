import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TaskDTO } from './dto/task.dto';
import { TaskValidationPipe } from './pipes/task.pipes';
import { Task } from './schemas/task.schema';
import { TaskService } from './task.service';

@Resolver(() => TaskDTO)
export class TaskResolver {
  constructor(
    private readonly taskService: TaskService,
  ) { }

  @Query(() => String)
  async hello() {
    return 'hello world';
  }

  @Query(() => [TaskDTO])
  async findall(@Args('userid', TaskValidationPipe) userid: string) {
    const dataFind = await this.taskService.find(userid);
    return dataFind;
  }

  @Query(() => TaskDTO)
  async find(@Args('userid', TaskValidationPipe) userid: string,
    @Args('taskid', TaskValidationPipe) taskid: string) {
    const dataFind = await this.taskService.findOne(userid, taskid);
    return dataFind;
  }

  @Mutation(() => TaskDTO)
  async create(@Args('userid', TaskValidationPipe) userid: string,
    @Args('description', TaskValidationPipe) description: string,) {
    const dataCreate = await this.taskService.create(userid, description);
    return dataCreate;
  }

  @Mutation(() => TaskDTO)
  async update(@Args('userid', TaskValidationPipe) userid: string,
    @Args('taskid', TaskValidationPipe) taskid: string,
    @Args('description', { nullable: true },) description?: string,
    @Args('when', { nullable: true },) when?: Date,) {
    const dataUpdate = await this.taskService.update(userid, taskid, description, when);
    return dataUpdate;
  }

  @Mutation(() => TaskDTO)
  async delete(@Args('userid', TaskValidationPipe) userid: string,
    @Args('taskid', TaskValidationPipe) taskid: string,) {
    const dataDeleted = await this.taskService.delete(userid, taskid);
    return dataDeleted;
  }

  //@ResolveField(returns => [RepoDTO])
  //async repos(@Parent() user:User){
  //  return this.userService.repoFind(user)
  //}

}

