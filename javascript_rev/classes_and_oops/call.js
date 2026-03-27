function setUserName(username){
    //complex db calls
    this.username=username
    console.log("called")
}
function createUser(username,email,password){
    setUserName.call(this,username)

    this.email =email
    this.password = password
}
const grimsage = new  createUser("grimsage","chai@fb.com",369)
console.log(grimsage)