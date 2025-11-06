const User = require('./user')

class Post {
  #number = 0
  #subscribers = []

  constructor (name) {
    this.name = name
  }

  get summary () {
    return `${this.name} publication number ${this.#number}`
  }

  getSubscribers () {
    return this.#subscribers.map(user => user.name).join(',')
  }

  attach (user) {
    if (user instanceof User && !this.#subscribers.includes(user)) {
      this.#subscribers.push(user)
    }
  }

  detach (user) {
    // const index = this.#subscribers.indexOf(user)
    // if (index >= 0) {
    //   this.#subscribers.splice(index, 1)
    // }
    this.#subscribers = this.#subscribers.filter(u => u !== user)
  }

  publish () {
    this.#number++
    return this.#subscribers.map(s => s.notify(this))
  }
}

module.exports = Post
