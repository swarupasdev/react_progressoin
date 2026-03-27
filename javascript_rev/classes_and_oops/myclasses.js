//after ES6

class user{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `kmlasj9jows;,p82637290${this.password};lskojijowkpkkwpabc`

    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const grimsage = new user("grimsage","san@gmail","525")

console.log(grimsage)
console.log(grimsage.encryptPassword())
console.log(grimsage.changeUsername())