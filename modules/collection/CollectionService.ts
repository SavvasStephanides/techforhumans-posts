import { PostService } from "../posts/PostService";
import { Collection } from "./Collection";

export class CollectionService{
    postService: PostService

    constructor(){
        this.postService = new PostService()
    }

    getCollectionFromFilename(fileName: string): Collection{
        let collectionFile = require(`../../collections/${fileName}`)

        let slug: string = fileName.replace(".json", "")
        let name = collectionFile.name
        let posts = collectionFile.posts.map((postSlug) => {
            return this.postService.getPostBySlug(postSlug)
        })

        return new Collection(slug, name, posts)
    }
}