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
        "title": meta.title,
        "content": html,
        ...meta
    }

    response.keywords = response.keywords.split(",").map(word => word.trim())

    return response
})

fs.mkdirSync("build")
fs.writeFileSync("build/posts.json", JSON.stringify(posts))