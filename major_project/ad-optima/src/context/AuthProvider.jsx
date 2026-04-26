import { useState } from "react"
import { AuthContext } from "./AuthProvider"

function AuthProvider({ children }) {
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

export default AuthProvider