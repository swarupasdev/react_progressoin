# All about react and javascript
## [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
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
###### Now ```__proto__``` and prototype
```__proto__``` is a property. Every object carries an internal pointer. ```__proto__``` is that pointer to another object . Javascript needs to reuse the code. What i mean by reuse is : for good memory management and fast execution JS keeps one copy of a function and let all the object share it instead of copying the same function into every object 

```use case 1:

const user ={
    name:"Swarup"
}
user.toString
console.log(user.toString())

```
let us understand with this code snippet .
JS is looks inside " user ". It wont find anything. Because you asked for a specific property here ```toString()``` . So it will get ```{name:"Swarup"}```. 

Now it will go to user.```__proto__```
before that you need to know javascript has a runtime engine like node runtime or v8 engine written in c++. What i am writing here is basically the thing goes inside those engines . You can not see these things on your IDE. so ``` __proto__``` is the name we use to access the ```[[prototype]]``` inside these engines.

```so now 

user.__proto__-->Object.prototype

```
```toString``` exists. Now execute it.  
simply ```user``` has ```name ``` so ```user.name``` works directly but ```user``` do not have ```toString``` so JS uses ```__proto__``` 

=======
## [React](https://react.dev/learn)
### File: [01react_basics](react_basics/01react_basics/)
#### Things for you to understand : 
1. [package.json](/react_basics/01react_basics/package.json)
This contains list dependancies and instructions

2. [package-lock.json](/react_basics/01react_basics/package-lock.json)
Stores Exact versions, dependancy tree, download urls, security hash

3. [index.html](/react_basics/01react_basics/public/index.html)
Browser understands only HTML,CSS,JS
React is just a library of javascript. Thus it needs an HTML entry point to attach itself. It is also called SPA(single Page Application).
```<div id="root"></div>``` provides a container. It is empty and it is a placeholder. An empty HTML element where React injects your UI
It reacts with [index.js](/react_basics/01react_basics/src/index.js)

4. [index.js](/react_basics/01react_basics/src/index.js)
connects HTML ```index.html``` and React ```App.js```.
```ReactDom```Website has its own dom but react creates its own virtual dom and compare it with browsers dom to compare the chnages and use it to manipulate object models . 
It has a method ```createRoot```.To acces the root ```document.getElementById('root')```. 
[<div id="root"> </div>](/react_basics/01react_basics/public/index.html) You are accessing this root by running ```document.getElementById('root')``` this script.
```ReactDOM.createRoot(document.getElementById('root'))``` we stored this refernce inside ```const root```. 
Now you will give command to root to render it into App. 

5. [App.js](/react_basics/01react_basics/src/App.js)
this is what you seee in browser

Whatever is done it is done inside the [src](/react_basics/01react_basics/src) and [public](/react_basics/01react_basics/public)

##### [customreact](/react_basics/customreact) Built a Mini react renderer
###### To understand [this](/react_basics/customreact) you have to understand :
Let us have some knowledge about <mark>DOM nodes</mark>
<mark>DOM nodes</mark> is a unit the browser uses to represent the web page 
A <mark>DOM nodes</mark> = one item inside the page structure basically the DOM TREE
<mark>Example:</mark>
```<div id="root">
  <h1>Hello</h1>
</div>```

###### how browser analyse this :
```document(the whole page)-->html-->body-->dive-->h1-->hello```
##### 3 types of dom nodes are here
Elemental node : ```<div></div>
                      <a></a>
                      <h1></h1>```

Text node : ```hello```
Document node: ```the whole page```

react operates like ```JS object -> DOM element -> render in browser```

In [index.html](/react_basics/customreact/index.html) 
- Browser is loading the html 
- creating the DOM
- finding ```<div id='root'>```
- then loads your JS file 

```
const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target:'_blank'
    },
    children:'Click on me to visit google'
}
```React creates objects like this internally 
- type: HTML tag
- props: attributes
- children: inner content

