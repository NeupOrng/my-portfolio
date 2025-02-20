export default interface IBlog {
    id: string,
    title: string,
    tags: string[],
    cover: string,
    createdAt: Date,
    content?: string
}