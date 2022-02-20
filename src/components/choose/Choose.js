export class Choose{
    id;
    prefix;
    content;
    delFlag;

    constructor(id, prefix, content, delFlag) {
        this.id = id;
        this.delFlag = delFlag;
        this.prefix = prefix;
        this.content = content;
    }

    get prefix() {
        return this.prefix;
    }

    set prefix(value) {
        this.prefix = value;
    }

    get content() {
        return this.content;
    }

    set content(value) {
        this.content = value;
    }
}