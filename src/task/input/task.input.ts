import { Field, InputType, Int } from "@nestjs/graphql";
import { StatusHistory } from '../types/status.history';


@InputType()
export class TaskInput {
    @Field({ nullable: true })
    readonly taskId: string
    @Field({ nullable: true })
    readonly userId: string;
    @Field({ nullable: true })
    readonly description: string;
    @Field({ nullable: true })
    readonly enable: boolean;
    @Field({ nullable: true })
    readonly when: string
    @Field({ nullable: true })
    readonly status: string
    @Field({ nullable: true })
    readonly status_history: [StatusHistory];
    @Field({ nullable: true })
    readonly created_at: Date;
    @Field({ nullable: true })
    readonly updated_at: Date;
}