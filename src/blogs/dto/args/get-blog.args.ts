/* eslint-disable prettier/prettier */
import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetBlogArgs {
    @Field()
    blogId: string
}