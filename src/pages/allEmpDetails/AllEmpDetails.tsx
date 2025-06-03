import Content from "../../components/content/Content"
import Filter from "../../components/filter/Filter"
import IconText from "../../components/icon-text/IconText"
import Table from "../../components/table/Table"
import "./AllEmpDetails.css"
import { useNavigate } from "react-router-dom"

const AllEmpDetails=()=>{
    const navigate=useNavigate()
    return(<>
    <Content title="All Employees" btnChildren={<div className="filter-btn">

   

        <Filter  />  
   
        <IconText icon="/assets/add-emp.png" text="Create" onClick={()=>{
           navigate("/employee")
        }} />
         </div>
        } >
        <Table />
    </Content></>)
}
export default AllEmpDetails