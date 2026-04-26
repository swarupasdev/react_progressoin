import { Link } from "react-router-dom"

function Navbar({title}) {
  return (  //returns the UI
    //outer{}: JavaScript inner{key: value}: object
    <nav style={{ 
                  display: "flex", 
                  justifyContent: "space-between" ,
                  padding: "10px"
                }}> 
                
      <h2>{title}</h2>

      <div style={{display: "flex" , gap:"15px"}}>{/*callback function ,function passed as props*/}
        <Link to="/">Home</Link>  {/*Link does event.preventDefault() no full refresh and server req for new HTML*/}
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  )
}

export default Navbar