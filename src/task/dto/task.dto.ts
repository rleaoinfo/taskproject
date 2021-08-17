import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { StatusHistory } from "../types/status.history";


@ObjectType()
export class TaskDTO {
    @Field({ nullable: true })
    taskId: string
    @Field({ nullable: true })
    userId: string;
    @Field({ nullable: true })
    description: string;
    @Field({ nullable: true })
    enable: boolean;
    @Field({ nullable: true })
    when: string
    @Field({ nullable: true })
    status: string
    @Field(type => [StatusHistory],{ nullable: true })
    status_history: StatusHistory[];
    @Field({ nullable: true })
    created_at: Date;
    @Field({ nullable: true })
    updated_at: Date;
}