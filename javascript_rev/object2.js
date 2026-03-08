let mySys = Symbol("key")


const facebook = new Object()


facebook.id = "san135"
facebook.name = "San"
facebook.isLoggedIn = false
mySys = "mykey"
console.log(facebook)

const regular = {

    fullname: {
        username: {
            firstname: "Santiswarup",
            lastname:"Nayak"
        }
    }

}

console.log(regular.fullname.username.firstname)

const obj1 = { 1: 'a', 2: 'c' }
const obj2 = { 3: 'b', 4: 'd' }

//const obj3 = {obj1,obj2 }//concatinate both obj as it is
//console.log(obj3)
const obj4 = Object.assign({},obj1, obj2 )     //include all target and sources and return another object including them
console.log(obj4)

const obj3 = { ...obj1, ...obj2 }  // works the same as above
console.log(obj3)

const user = [
{
    id: 1,                                        //[1]
    email: "swarup@gmail.com"
},
{
    id: 2,
    email: "swarup2@gmail.com"                    //[2]
},
{
    id: 3,
    email: "swarup3@gmail.com"                    //[3]
}

]
console.log(user[1].email)  //can access a single element inside the array of objects

console.log(Object.keys(facebook))  //entities and values can also be shown by this

console.log(facebook.hasOwnProperty("isLoggedIn")) //returns if the key available or not returns in boolean