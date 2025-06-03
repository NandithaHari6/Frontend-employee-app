// interface Children{
//     children:React.ReactNode;
// }
import "./Layout.css";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../side-bar/SideBar";
import Button from "../button/Button";
const Layout = () => {
    const navigate=useNavigate()
  // const isLoggedIn = () => {
  //   const token = localStorage.getItem("isLoggedIn");
  //   return token === "true";
  // };
  // if (!isLoggedIn()) {
  //   navigate("/login")
  //   return;
  // }
  if(localStorage.getItem("token")===""){
    navigate("/login")
    return
  }
  return (
    <div className="main">
      <SideBar />
      <div className="main-container">
        <div className="layout-header">
            <Button title="Logout" onClick={()=>{
                localStorage.setItem("token","")
                navigate("/login") 
            }} className="logout-btn secondary-btn" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
