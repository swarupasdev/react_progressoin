import { createContext, useState, useEffect } from "react"  //to build a global data channel
//createContext -> create a shared channel


export const AuthContext = createContext()  //Creates and exports a context object

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
  const storedUser = localStorage.getItem("user")  //browser storage system
  if (storedUser) {
    
    
    setUser(JSON.parse(storedUser))  //trigeers re-render with restored user
  }
    setLoading(false)   //done loading
  },[])

//login function
  function login(username) {   
  const userData = { name: username }
  setUser(userData)
  localStorage.setItem("user", JSON.stringify(userData))  //converts object to string 
}

//logout function 
  function logout() {
  setUser(null)  //clears react state 
  localStorage.removeItem("user")
}

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}   {/*renders wrapped components*/}
    </AuthContext.Provider>
  )
}