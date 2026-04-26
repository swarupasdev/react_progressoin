import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

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