import { link } from "fs";

class Buscador {
    private paginas : string;
    private content : string;

    constructor(link : string, content : string) {
        this.link = link;
        this.content = content;
    }
}