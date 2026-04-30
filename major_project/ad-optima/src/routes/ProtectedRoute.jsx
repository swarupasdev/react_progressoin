import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext)
  console.log("ProtectedRoute:", { user, loading, children })


  if (loading) return null

  if (!user) return <Navigate to="/login" replace />

  return children
}

export default ProtectedRoute