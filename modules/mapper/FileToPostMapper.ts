import { readFileSync } from "fs";
import { Post } from "../posts/Post";
const showdown  = require('showdown')
const converter = new showdown.Converter({metadata: true})

export class FileToPostMapper{
    getPostFromMDFile(fileName: string): Post{
        let postFilePath: string = `./posts/${fileName}`
        let fileContent: string = readFileSync(postFilePath, "utf-8")

        let html = converter.makeHtml(fileContent)
        let meta = converter.getMetadata()

        let post = new Post(fileName.replace(".md", ""), meta.title, meta.description, html, meta.publishDate, meta.thumbnail, meta.keywords ? meta.keywords.split(", ") : [], meta.twitterimage)
        return post
    }
}