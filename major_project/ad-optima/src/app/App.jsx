import {useState} from "react"
import Navbar from "../components/Navbar"

function App() {
  const [message,setMessage] = useState("Welcome to Ad-Optima")
  return (
    <>
      <Navbar title="Ad-Optima"/>
      <h1>{message}</h1>
      <button onClick={()=>setMessage("You clicked Home")}>Click Me</button>
    </>
  )
}

export default App