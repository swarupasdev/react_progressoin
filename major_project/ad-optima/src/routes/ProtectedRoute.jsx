import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
//protected route for user without this anyone can access your dashboard and createcampaign 
function ProtectedRoute({ children }) {  //AppRoute reference
  const { user, loading } = useContext(AuthContext)

  //debugging line
  console.log("ProtectedRoute:", { user, loading, children })

  //Without this App may redirect user before login restoration finishes.
  if (loading) return null

  //replace removes current page from browser history
  if (!user) return <Navigate to="/login" replace />

  return children
}

export default ProtectedRoute