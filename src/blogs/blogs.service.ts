/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entity';
import { CreateBlogInput } from './dto/input/create-blog.input';
import { v4 as uuidv4 } from 'uuid';
import { UpdateBlogInput } from './dto/input/update-blog.input';
import { GetBlogArgs } from './dto/args/get-blog.args';
import { GetBlogsArgs } from './dto/args/get-blogs.args';
import { DeleteBlogInput } from './dto/input/delete-blog.input';

@Injectable()
export class BlogsService {
    private blogs: Blog[] = [];
    public createBlog(createBlogData: CreateBlogInput): Blog {
        const blog: Blog = {
            id: uuidv4(),
            ...createBlogData
        }
        this.blogs.push(blog);
        return blog;
    }
    public updateBlog(updateBlogData: UpdateBlogInput): Blog {
        const blog = this.blogs.find(blog => blog.id === updateBlogData.blogId);
        Object.assign(blog, updateBlogData);
        return blog;
    }
    public getSingleBlog(getBlogArgs: GetBlogArgs): Blog {
        return this.blogs.find(blog => blog.id === getBlogArgs.blogId);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getAllBlogs(getBlogsArgs: GetBlogsArgs): Blog[] {
        return this.blogs;
    }
    public removeBlog(removeBlogData: DeleteBlogInput): Blog {
        const blogIndex = this.blogs.findIndex(blog => blog.id === removeBlogData.blogId);
        const blog = this.blogs[blogIndex]
        this.blogs.splice(blogIndex, 1);
        return blog;
    }

}
