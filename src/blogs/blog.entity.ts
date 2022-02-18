/* eslint-disable prettier/prettier */
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Blog {
    @Field()
    id: string;
    @Field()
    title: string;
    @Field()
    body: string;
    @Field()
    author: string;
    @Field()
    image: string;
}
