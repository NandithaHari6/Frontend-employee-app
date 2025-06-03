import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import Content from "../../components/content/Content";
import Button from "../../components/button/Button";
import DetailsCard from "../../components/detailsCard/DetailsCard.";
import IconText from "../../components/icon-text/IconText";
const EmpDetails=()=>{
    // const {id}=useParams();
    // const [queryParams,setQueryParams]=useSearchParams()
    // function getQueryParams(){
    //     console.log(queryParams)
    //     console.log(queryParams.get("status"))
    // }
    // function setQueryParam(){
    //     const newqueryParams=new URLSearchParams(queryParams)
    //     newqueryParams.set("newPrams","new")
    //     setQueryParams(newqueryParams)
    // }
    const navigate=useNavigate()
    return(<>
    <Content title="Employee Details" btnChildren={
        
        <IconText
          icon="/assets/edit-pen.svg"
          text="Edit Employee "
          onClick={(e)=>{
            navigate("/employee/editEmployee")

          }}
        />
      }>
        <DetailsCard />
        </Content></>
        
    )
}
export default EmpDetails