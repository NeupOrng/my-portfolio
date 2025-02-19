export default interface IBlog {
    id: string,
    title: string,
    cover: string,
    createdAt: Date,
    description: string,
    content?: string
}