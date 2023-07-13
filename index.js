const fs = require("fs")
const showdown  = require('showdown')

const converter = new showdown.Converter({metadata: true})

let postFiles = fs.readdirSync("posts")

let posts = postFiles.map((postFile) => {
    let content = fs.readFileSync(`posts/${postFile}`, {encoding:'utf8'})
    let html = converter.makeHtml(content)
    let meta = converter.getMetadata()

    let response = {
        "slug": postFile.replace(".md", ""),
        "content": html,
        ...meta
    }

    if(response.keywords){
        response.keywords = response.keywords.split(",").map(word => word.trim())
    }

    return response
})

fs.mkdirSync("build")
fs.mkdirSync("build/posts")
fs.writeFileSync("build/posts/all.json", JSON.stringify(posts))

fs.mkdirSync("build/collections")

let collectionFiles = fs.readdirSync("collections")

collectionFiles.forEach((file) => {
    let collection = require(`./collections/${file}`)
    
    let collectionPosts = collection.posts.map((p) => {
        return posts.find(post => post.slug === p)
    })

    collection.posts = collectionPosts

    fs.writeFileSync(`build/collections/${file}`, JSON.stringify(collection))
})