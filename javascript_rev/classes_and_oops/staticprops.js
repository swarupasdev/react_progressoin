// class User {
//     constructor(username){
//         this.username=username
//     }

//     logMe(){
//         console.log(`username:${this.username}`)
//     }
//     static CREATEiD(){
//         return `123`
//     }
// }

// const swarup = new User("San")
// console.log(User.CREATEiD())

// class teacher extends User{

//     constructor(user2,email){
//         super(user2)
//         this.email=email
//     }

// }

//const company = new teacher("grrimsage",'grimsage@143')
//console.log(company.CREATEiD()) cant get accessed


class a{
    static hello(){
        return 5+5
    }
}
class b extends a{}
console.log(b.hello())  //can be inheritated by child class 