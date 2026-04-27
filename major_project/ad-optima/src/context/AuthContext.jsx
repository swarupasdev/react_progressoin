import { createContext, useState } from "react"  //to build a global data channel


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()  //Creates and exports a context object

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(username) {
    setUser({ name: username })
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}