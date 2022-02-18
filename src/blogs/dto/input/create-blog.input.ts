/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBlogInput {
    @Field()
    title: string;
    @Field()
    body: string;
    @Field()
    author: string;
    @Field()
    image: string;
}