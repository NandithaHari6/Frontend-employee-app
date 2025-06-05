import NameLabel from "../name-label-grp/NameLabel";
import { useSelector} from "react-redux";
// import employees from "../../../data/employee-data";
import { useParams, Navigate } from "react-router-dom";
import "./DetailsCard.css";
import {  useGetOneEmpQuery } from "../../api-services/employees/employees.api";
const DetailsCard = () => {
  const { id } = useParams();
  
  // const employees=useSelector(state=>state.employees)
  const {data:emp}=useGetOneEmpQuery(id)
  console.log(emp)

  // const emp = employees.find((emp) => emp.employeeId === id);
  // if (!emp) {
  //   return <Navigate to="*"/>
  // }
  const labelMapping={
    employeeId:"Employee ID",
      name: "Name",
    dateOfJoining: "Date Of Joining",
    role: "Role",
    status: "Status",
    experience: "Experience",
    email: "Email",
  }
  return (
    <>
     {emp && (<div className="details-card">
        
        {/* {emp && Object.entries(emp).map(([key, value]) => {
            
          return <NameLabel label={labelMapping[key]} value={value} />;
        })} */}
        <NameLabel label="Name" value={emp.name} />
        <NameLabel label="Email" value={emp.email} />
        <NameLabel label="Age" value={emp.age} />
        <NameLabel label="Experience" value={emp.experience} />
        <NameLabel label="Address" value={emp.address.houseNo +" "+ emp.address.line1 +" "+emp.address.line2+" "+emp.address.pincode} />
        <NameLabel label="Employee ID" value={emp.employeeId} />
        {emp.department && <NameLabel label="Department" value={emp.department.dept_name} />}
      </div>)}
    </>
  );
};
export default DetailsCard;
