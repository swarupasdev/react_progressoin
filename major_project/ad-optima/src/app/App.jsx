import {useState, useEffect} from "react"   //react hooks
import Navbar from "../components/Navbar"   //component modularity

function App() {
  const [message,setMessage] = useState("Welcome to Ad-Optima") //state management
  useEffect(() => {
    console.log("App Loaded")
  }, [])
function handleMenuClick(page) {
    setMessage(`You selected ${page}`)
  }

  return (
    //fragment,  {message} : displaying state, and using JS inside HTML
    //onClick() event handler , {()=>} : run only when clicked
    //props for component communication
    <>
      <Navbar title="Ad-Optima" onMenuClick={handleMenuClick} />
      <h1>{message}</h1>
      <button onClick={()=>setMessage("You clicked Home")}>Click Me</button>
    </>
    //closing fragment
  )
}

export default App