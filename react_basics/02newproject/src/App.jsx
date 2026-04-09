import { useState } from 'react'  //hooks
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  useState
  let counter =6

function addValue(){

  console.log("Value",counter)
  counter=counter+1

  
}

  return (
    <>
      <h1>Swarup's new project</h1>
      <h2>Counter value: {counter}</h2>  
      <button onClick={ addValue}>Add value{counter}</button>
      <br></br>
      <button>remove value{counter}</button>
      <p></p>
    </>
  )
}

export default App
