const User = require('./user')

class Post {
    name;
    #number = 0;
    #subscribers = [];

    constructor (name) {
        this.name = name;
    }

    get summary(){
        return `${this.name} publication number ${this.#number}`;
    }

    getSubscribers(){
        return this.#subscribers.map(client => client.name).join(',');
    }

    attach(user){
        if (user instanceof User){
            if(!this.#subscribers.includes(user)){
            this.#subscribers.push(user);
             }
        }
    }

    detach(user) {
        this.#subscribers = this.#subscribers.filter(subscriber => subscriber !== user);
    }

    publish(){
        this.#number++;
        return this.#subscribers.map(subscriber => subscriber.notify(this));
    }
}

module.exports = Post
