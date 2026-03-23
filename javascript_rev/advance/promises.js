//basically an object represnting the eventual completion or failure of an asynchronous operation  

const promise1 = new Promise(function (resolve, reject){

    //do an sync task
    //db calls , cryptography, network call
    setTimeout(function(){
        console.log("Async is complete")
    }, 1000)

})    //callback inside callback


promise1.then(function(){
    console.log("Promise consumed")
})         //connection with resolve

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async part 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved ")
})

const promise3 = new Promise(function (resolve, reject){

    //do an sync task
    //db calls , cryptography, network call
    setTimeout(function(){
        console.log("Async is complete")
    }, 1000)

})  