import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../layouts/Layout"

import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
//import Dashboard from "../pages/Dashboard"
//import CreateCampaign from "../pages/CreateCampaign"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes