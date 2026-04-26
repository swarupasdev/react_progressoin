import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

function Login() {
  const { login } = useContext(AuthContext)

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => login("Swarup")}>Login</button>
    </>
  )
}

export default Login