import {useState} from "react"
import Navbar from "../components/Navbar"

function App() {
  const [message,setMessage] = useState("Welcome to Ad-Optima")
  return (
    //fragment,  {message} : displaying state, and using JS inside HTML
    //onClick() event handler , {()=>} : run only when clicked
    <>
      <Navbar title="Ad-Optima"/>
      <h1>{message}</h1>
      <button onClick={()=>setMessage("You clicked Home")}>Click Me</button>
    </>
    //closing fragment
  )
}

export default App