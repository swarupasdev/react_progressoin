const course = {

    cName : 'js in hindi',
    cPrice : '950',
    cInstructor : 'swarup'
}

// course.cInstructor

const { cInstructor: Instructure } = course   // you're changing a value inside an object destructuring of object

//console.log(cInstructor)
console.log(Instructure)

//api
//{
//    "name": "swarup",
//    "cName": "js in eng",
//    "price": "free"
//}

//[
//    {},
//    {},
//    {}
//]