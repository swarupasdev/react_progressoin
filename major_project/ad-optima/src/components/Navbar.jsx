function Navbar({ title, onMenuClick }) {
  return (  //returns the UI
    //outer{}: JavaScript inner{key: value}: object
    <nav style={{ 
                  display: "flex", 
                  justifyContent: "space-between" 
                }}> 
                
      <h2>{title}</h2>

      <div>{/*callback function ,function passed as props*/}
        <button onClick={() => onMenuClick("Home")}>Home</button>
        <button onClick={() => onMenuClick("Login")}>Login</button>
        <button onClick={() => onMenuClick("Signup")}>Signup</button>
      </div>
    </nav>
  )
}

export default Navbar