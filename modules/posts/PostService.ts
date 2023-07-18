import { Post } from "./Post";
import { FileToPostMapper } from "../mapper/FileToPostMapper";
import { readdirSync } from "fs";
export class PostService{

fileToPostMapper: FileToPostMapper

    constructor(){
        this.fileToPostMapper = new FileToPostMapper()
    }

    getAllPosts(): Post[] {
        return this.getAllPostSlugs().map(slug => {
            return this.getPostBySlug(slug)
        })
    }

    getPostsByCollection(collectionName: string): Post[]{
        let collection = require(`../../collections/${collectionName}.json`)
        let postSlugs = collection.posts

        let posts = postSlugs.map(slug => {
            return this.getPostBySlug(slug)
        })

        return posts
    }

    getPostBySlug(slug: string): Post{
        
        let post = this.fileToPostMapper.getPostFromMDFile(`${slug}.md`)
        
        return post
    }

    private getAllPostSlugs(): string[]{
        return readdirSync("./posts").map(fileName => fileName.replace(".md", ""))
    }
}