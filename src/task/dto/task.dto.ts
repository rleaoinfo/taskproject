import { Field, ID, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class TaskDTO {
    @Field({nullable: true})
    taskId: string
    @Field({nullable: true})
    userId: string;
    @Field({nullable: true})
    description: string;
    @Field({nullable: true})
    enable: boolean;
    @Field({nullable: true})
    when: string
    @Field({nullable: true})
    array: string;
    @Field({nullable: true})
    created_at: string;
    @Field({nullable: true})
    updated_at: string;
}