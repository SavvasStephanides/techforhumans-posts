import { Post } from "../posts/Post"

export class Collection{
    slug: string
    name: string
    posts: Post[]

    constructor(slug: string, name: string, posts: Post[]){
        this.slug = slug
        this.name = name
        this.posts = posts
    }
}