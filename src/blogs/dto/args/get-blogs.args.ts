/* eslint-disable prettier/prettier */
import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetBlogsArgs {
    @Field(() => [String])
    blogIds: string[]
}