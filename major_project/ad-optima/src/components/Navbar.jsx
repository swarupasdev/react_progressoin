function Navbar() {
  return (  //returns the UI
    //outer{}: JavaScript inner{key: value}: object
    <nav style={{ 
                  display: "flex", 
                  justifyContent: "space-between" 
                }}> 
                
      <h2>Ad-Optima</h2>

      <div>
        <button>Home</button>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  )
}

export default Navbar