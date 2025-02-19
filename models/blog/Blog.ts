import type IBlog from "./IBlog";

export default class Blog implements IBlog {
    id: string;
    title: string;
    cover: string;
    createdAt: Date;
    description: string;
    content?: string;
    
    constructor(object: IBlog) {
        this.id = object.id;
        this.title = object.title;
        this.cover = object.cover;
        this.createdAt = object.createdAt;
        this.description = object.description;
        if(object.content) {
            this.content = object.content;
        }
    }

    get descriptionForCard() {
        const words = this.description.split(" "); // Split the string into words
        if (words.length > 10) {
            return words.slice(0, 5).join(" ") + "..."; // Take first 10 words and append "..."
        }
        return this.description;
    }
}