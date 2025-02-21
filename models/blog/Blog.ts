import type IBlog from "./IBlog";
import { marked } from "marked";

export default class Blog implements IBlog {
    id: string;
    title: string;
    cover: string;
    createdAt: Date;
    tags: string[];
    content?: string;
    htmlContent?: string;
    
    constructor(object: IBlog) {
        Object.assign(this, object);
    }

    async generateHtmlContent() {
        this.htmlContent = await marked(this.content ?? '');
    }
}