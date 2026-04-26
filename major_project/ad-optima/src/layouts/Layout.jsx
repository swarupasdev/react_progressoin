import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function Layout(){
    return(

        <>
        <Navbar title="Ad-Optima"/>
        <Outlet/>  {/*placeholder to render child routes inside a parent layout*/}
        </>

    )
}
export default Layout