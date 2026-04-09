import { useState } from 'react'  //hooks
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  let [counter,setCounter]=useState(6)  //counter setcounter variable,setCounter an inbuilt method will control counter

  //let counter =6

function addValue(){
    
  //counter=counter+1
  setCounter(counter+1)
  console.log("Value",counter)        //state changed 
}
function removeValue(){
  
  setCounter(counter-1)
  console.log("clicked",counter)      //state changed

}  


  return (
    <>
      <h1>Swarup's new project</h1>
      <h2>Counter value: {counter}</h2>  
      <button onClick={ addValue}>Add value</button>
      <br></br>
      <button onClick ={removeValue}>remove value</button>
      <p></p>
    </>
  )
}

export default App
