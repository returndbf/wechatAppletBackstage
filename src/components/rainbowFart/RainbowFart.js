export class RainbowFart {
    id
    addTime
    adder
    author
    delFlag
    deleteTime
    sentence
    constructor(id, addTime, adder, author, delFlag, deleteTime, sentence) {
        this.id = id
        this.addTime = addTime
        this.adder=adder
        this.author=author
        this.delFlag=delFlag
        this.deleteTime=deleteTime
        this.sentence=sentence

    }
    setAdder(adder){
        this.adder = adder
    }
    setAuthor(author){
        this.author = author
    }
    setSentence(sentence){
        this.sentence = sentence
    }
}