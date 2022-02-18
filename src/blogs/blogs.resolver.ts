/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Blog } from './blog.entity';
import { BlogsService } from './blogs.service';
import { GetBlogArgs } from './dto/args/get-blog.args';
import { GetBlogsArgs } from './dto/args/get-blogs.args';
import { CreateBlogInput } from './dto/input/create-blog.input';
import { DeleteBlogInput } from './dto/input/delete-blog.input';
import { UpdateBlogInput } from './dto/input/update-blog.input';

@Resolver(() => Blog)
export class BlogsResolver {

    constructor(private readonly blogsService: BlogsService) { }


    @Query(() => Blog, { name: 'blog', nullable: true })
    getSingleBlog(@Args() getBlogArgs: GetBlogArgs): Blog {
        return this.blogsService.getSingleBlog(getBlogArgs);
    }

    @Query(() => [Blog], { name: 'blogs', nullable: 'items' })
    getAllBlogs(@Args() getBlogsArgs: GetBlogsArgs): Blog[] {
        return this.blogsService.getAllBlogs(getBlogsArgs);
    }

    @Mutation(() => Blog)
    createBlog(@Args('createBlogData') createBlogData: CreateBlogInput): Blog {
        return this.blogsService.createBlog(createBlogData);
    }

    @Mutation(() => Blog)
    updateBlog(@Args('updateBlogData') getBlogData: UpdateBlogInput): Blog {
        return this.blogsService.updateBlog(getBlogData);
    }
    @Mutation(() => Blog)
    removeBlog(@Args('deleteBlogData') deleteBlogData: DeleteBlogInput): Blog {
        return this.blogsService.removeBlog(deleteBlogData);
    }

}
