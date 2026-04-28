import { createContext, useState, useEffect } from "react"  //to build a global data channel
//createContext -> create a shared channel

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()  //Creates and exports a context object

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
  const storedUser = localStorage.getItem("user")
  if (storedUser) {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(JSON.parse(storedUser))
  }
}, [])

  function login(username) {
  const userData = { name: username }
  setUser(userData)
  localStorage.setItem("user", JSON.stringify(userData))
}
  function logout() {
  setUser(null)
  localStorage.removeItem("user")
}

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}