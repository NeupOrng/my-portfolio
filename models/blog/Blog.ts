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
    
    constructor(){
        this.id = '';
        this.title = '';
        this.cover = '';
        this.createdAt = new Date();
        this.tags = [];
        this.content = '';
        this.htmlContent = '';
    }

    fromJson(object: any): Blog {
        Object.assign(this, object);
        return this;
    }

    async generateHtmlContent() {
        this.htmlContent = await marked(this.content ?? '');
    }
}