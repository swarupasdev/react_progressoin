import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function Layout(){
    return(

        <>
        
        <Navbar title="Ad-Optima"/>
        <Outlet/>
        
        </>


    )
}
export default Layout