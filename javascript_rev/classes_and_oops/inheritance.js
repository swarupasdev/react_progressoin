class user{
    constructor (username){
        this.username=username

    }

    logme(){
        console.log(`User name is ${this.username}`)
    }
}

class Teacher extends user{

    constructor (username,email,password){

        super(username)
        this.email=email
        this.password=password

    }

    addCourse(){

        console.log(`A new course was added by ${this.username}`)

    }

}

const grim =  new Teacher("Swarup","sanswarup@gmail.com",95468)

grim.addCourse()
const grimsage=new user("grimsage")

grimsage.addCourse