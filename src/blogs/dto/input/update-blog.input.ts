/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateBlogInput {

    @Field()
    blogId: string;
    @Field()
    title: string;
    @Field()
    body: string;
    @Field()
    author: string;
    @Field()
    image: string;

}