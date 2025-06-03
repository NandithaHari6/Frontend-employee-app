import { useNavigate } from "react-router-dom";
import Image from "../image/Image";
import NavElement from "../navElement/NavElement";
import "./SideBar.css"

const SideBar=()=>{
    const navigate=useNavigate()
    return(<div className="side-bar">
        <div className="logo">
             <Image source="/assets/kv-logo.png" className="logo_img"/>
    
    </div>

    <nav>
        <NavElement nav_heading="Employee List" nav_icon_src="/assets/icon.svg" onClick={()=>{
            navigate("/employee/viewAll")
        }} />
        {/* <NavElement nav_heading="Create Employee" nav_icon_src=".././../../src/assets/icon.svg" /> */}
       
    </nav>
    </div>)
}
export default SideBar;