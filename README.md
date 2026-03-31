# All about react and javascript
## JavaScript
### File: [variables_.js](javascript_rev/variables_.js)
#### Things for you to understand :
There are 3 types of varibale declaration
1. let: block scoped
        can not be redeclared inside same scope
        can be reassigned
        temporal dead zone
2. Var:  can be reclared 
         can be reassigned
         undefined 
3. Const: block scoped
          can not be redeclared
          can not be reassigned
          must be initialized

### File: [string.js](javascript_rev/string.js)
#### Things for you to understand :
Strings and about their methods I wanna say that it has a lot of methods everything you can not definitely study that is why you need to check the documentation in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) known as a documentation created by Mozilla which i very much structured that Java Script official documentation.

So now 
1st of all string a sequence of character but in js it is an object like primitive 
because JS does temporary wrapping 
now what is temporary wrapping : it is the behaviour if java script behind the scene .
``` If you write like:
let name = "Swarup"
console.log(typeof name)  //string
```
what JS is doing here is reserving a memory space inside the memory of computer , it starts reading line by line then it wll see "Swarup" is assigned to name , now the "Swarup" will take place as a primitive string here.
###### typeof is an operator here 
it will see what type of assigned value is "Swarup" . Then it will return String

``` if you write like :
let name = "Swarup"
name.toUpperCase()
console.log(typeof (name.toUpperCase()))  //String
```
what JS is doing here is creating a temporary object 
```
new String("Swarup").toUpperCase()  //behind the scene 
```
after using the methid it deletes the object and returns the output
###### primitive assigned value ---> wrapper ---> method used ---> wrapper destroyed

```
let str = "Swarup";
let objStr = new String(str)
console.log(typeof objStr)  // Object
```
now this is a real object different from temporary 
inside work:
```
objStr = {
  [[PrimitiveValue]]: "Swarup",
  __proto__: String.prototype
}
```
new String() = you are manually creating a wrapper object that permanently holds the string
###### Now __proto__ and prototype
