import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class TaskInput {
    @Field({nullable: true})
    readonly taskId: string
    @Field({nullable: true})
    readonly userId: string;
    @Field({nullable: true})
    readonly description: string;
    @Field({nullable: true})
    readonly enable: boolean;
    @Field({nullable: true})
    readonly when: string
    @Field({nullable: true})
    readonly array: string;
    @Field({nullable: true})
    readonly created_at: string;
    @Field({nullable: true})
    readonly updated_at: string;
}