import { mkdirSync, readdirSync, writeFileSync } from "fs";
import { PostService } from "./modules/posts/PostService";
import { CollectionService } from "./modules/collection/CollectionService";

let postService = new PostService()
let collectionService = new CollectionService()

function build(){
    buildAllPosts()
    buildCollections()
}

function buildAllPosts(){
    let posts = postService.getAllPosts()

    mkdirSync("build")
    mkdirSync("build/posts")
    writeFileSync("build/posts/all.json", JSON.stringify(posts))
}

function buildCollections(){
    mkdirSync("build/collections")

    let collectionFileNames = readdirSync("collections")
    
    let collections = collectionFileNames.map(fileName => {
        return collectionService.getCollectionFromFilename(fileName)
    })
    
    collections.forEach((collection) => {
        writeFileSync(`./build/collections/${collection.slug}.json`, JSON.stringify(collection))
    })
}

build()
