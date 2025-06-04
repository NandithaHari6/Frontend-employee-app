// import CreateEmpContent from "../../components/content/CreateEmpContent";
import { useState } from "react";
import Content from "../../components/content/Content";
import FormCard from "../../components/form-card/FormCard";
import { useAppDispatch } from "../../store/store";
// import store from "../../store-old/store";
// import type { AddEmployeeAction } from "../../store-old/employee/employee.types";
// import store from "../../store/store"; 
import {  addEmployee } from "../../store/employee/employeeReducer";
import { useCreateMutation } from "../../api-services/employees/employees.api";
import { useNavigate } from "react-router-dom";
const CreateEmp = () => {
  const [create,isLoading]=useCreateMutation()
  const [error,setError]=useState("")
  const navigate=useNavigate()
  const [values, setValues] = useState({
  employeeId: "",
  name: "",
  dateOfJoining: "",
  role: "UI",
  status: "",
  experience: 0,
  email: "",
  dept:"",
  age:0,
  password:""
  
});
const [addressValues, setAddressValues] = useState({
  houseNo: 0,
  line1: "",
  line2: "",
  pincode: "",
});
// const deptMapping={
//   1:"Frontend",
//   2:"Backend",
//   3:"AI"
// }
// const dispatch=useAppDispatch()
  return (
    <Content title="Create Employee">
      {(error) && <p> {error}</p>}
      <FormCard
        isEdit={false}
        values={values}
        onChange={(field: string, value) => {
          setValues({ ...values, [field]: value });
        }}
        addressValues={addressValues}
        addressOnChange={(field: string, value) => {
          setAddressValues({ ...addressValues, [field]: value });
        }}
        handleSubmit={(e)=>{
          e.preventDefault()
          console.log(values)
          // const currDept=Object.entries(deptMapping).filter(([key ,value])=> value===values.dept)
          
          const payload = {
            ...values,
            age:Number(values.age),
           
            experience:Number(values.experience),
            
            address: {...addressValues,houseNo:Number(addressValues.houseNo)}
          }
          console.log(payload)
          create(payload).unwrap().then((response)=>{
            console.log("Response")
            console.log(response)
            navigate(`/employee/${response.id}`)
          }).catch((e)=>{
            setError(e.data.message)
            console.log(e.data.message)
          }
          )
          // dispatch(addEmployee(payload));

          
        }}
      />
    </Content>
  );
};
export default CreateEmp;
