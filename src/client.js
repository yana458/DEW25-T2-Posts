const User = require('./user')

class Client extends User {
    billing = 0;

    notify(post){
        //if(post instanceof PaidPost){  lo quitamos por referencia cruzada
        if(post.price){
            this.billing = parseFloat((this.billing + post.price).toFixed(2));
        }
        return super.notify(post);
  }
}

module.exports = Client
