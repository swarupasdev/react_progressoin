// //basically an object represnting the eventual completion or failure of an asynchronous operation  

// const promise1 = new Promise(function (resolve, reject){

//     //do an sync task
//     //db calls , cryptography, network call
//     setTimeout(function(){
//         console.log("Async is complete")
//     }, 1000)

// })    //callback inside callback


// // promise1.then(function(){
// //     console.log("Promise consumed")
// // })         //connection with resolve

// const promise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async part 2")
//         resolve()
//     },1000)
// })
//     promise2.then(function(){
//     console.log("Async 2 resolved ")
// })

// const promise3 = new Promise(function (resolve, reject){

// //     //do an sync task
// //     //db calls , cryptography, network call
//     setTimeout(function(){
//         resolve({username: "Swarup",email:"santiswarup1@gmail.com",codename:"grim-sage"})
//          //console.log("Async is complete")
//      }, 1000)


//      })
//           promise3.then(function(user){
//          console.log(user)
//  })  

//  const promise4= new Promise(function(resolve,reject){

//     setTimeout(function(){

//         let error = true
//         if (!error){

//             resolve({username:"Swarup", password: "grim369"})
            
//         }else{
//             reject("ERROR: Something went wrong")
//         }

//     },1000)
// })
//     promise4.then(function(user1){

//         console.log(user1);
//         return user.username

//     }).then(function(){
//         console.log(username)
//     }).catch(function(error){
//         console.log(error)
// }).finally(function(){
//     console.log("Promised is resolved")
// })

// const promise5 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error){
//             resolve({username: "San",password:"san@123"})
//         }else{
//             reject('connection established')
//         }
//     },1000)
// })

// async function consumePromise5(){
//     try{
//     const response = await promise5
//     console.log(response)
// }catch(error){
//     console.log(error)
// }
// }
// consumePromise5()

//implementation

async function getAllusers(){
    try{ 
           const response =await fetch ('https://api.github.com/users/swarupasdev')   //fetch the url then it will 'await' now store the response into  a varibale
    //it wil return string data so parse to json
       // console.log(response)
       // const data = response.json()      //sometimes it takes time to convert the data into json so you just make it 'await'
        const data = await response.json()
        console.log(data)       
}catch(error)
{
    console.log("E: ",error)
}
}

getAllusers()