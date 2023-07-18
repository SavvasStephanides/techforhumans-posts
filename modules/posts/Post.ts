export class Post{
    slug: string
    title: string
    description: string
    content: string
    publishDate: Date
    thumbnail: string
    keywords: string[]
    twitterImage: string

    constructor(slug:string, title: string, description: string, content: string, publishDate: Date, thumbnail: string, keywords: string[], twitterImage: string){
        this.slug = slug
        this.title = title
        this.description = description
        this.content = content
        this.publishDate = publishDate
        this.thumbnail = thumbnail
        this.keywords = keywords
        this.twitterImage = twitterImage
    }
}