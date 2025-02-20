import type IBlog from "./IBlog";

export default class Blog implements IBlog {
    id: string;
    title: string;
    cover: string;
    createdAt: Date;
    tags: string[];
    content?: string;
    
    constructor(object: IBlog) {
        Object.assign(this, object);
    }

}