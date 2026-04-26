import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

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