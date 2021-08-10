import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class StatusHistory {

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    when: Date;
}

