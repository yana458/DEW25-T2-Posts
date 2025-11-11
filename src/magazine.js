const PaidPost = require("./paid-post");

class Magazine extends PaidPost {
    topic;

    constructor(name, price, topic){
        super(name, price);
        this.topic = topic;
    }

    get summary(){
        return super.summary + ` of ${this.topic}`;
    }
}

module.exports = Magazine
