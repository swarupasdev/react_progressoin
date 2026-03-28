class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get password(){
        return this._password.toUpperCase()      //will give error without defining setter
    }
    // set password(value){
    //     this.password=value                     //maximum callstack exceeded
    // }
    set password(value){
        this._password=value//.toUpperCase()                     //maximum callstack exceeded
     }
}

const swarup = new User("Any@","jdhgckj")
console.log(swarup.password)