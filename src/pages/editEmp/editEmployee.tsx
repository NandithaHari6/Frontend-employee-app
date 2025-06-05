import { useGetOneEmpQuery, useUpdateMutation } from "../../api-services/employees/employees.api";
import Content from "../../components/content/Content";
import FormCard from "../../components/form-card/FormCard";
// import { type AddEmployeeAction } from "../../store-old/employee/employee.types";
// import store from "../../store-old/store";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditEmployee = () => {
  const { id } = useParams();
  const empObj = {
    employeeId: "",
    name: "",
    dateOfJoining: "",
    role: "",
    status: "",
    experience: 0,
    email: "",
    dept_id:0,
    age: 0,
    password: "",


  };
  const addObj = {
    houseNo: 0,
    line1: "",
    line2: "",
    pincode: "",
  };
  // const deptMapping={
  // 1:"Frontend",
  // 2:"Backend",
  // 3:"AI"
// }
  console.log(id);
  const [values, setValues] = useState(empObj);
  const [addressValues, setAddressValues] = useState(addObj);
  const { data: currEmployee } = useGetOneEmpQuery(Number(id));
  const navigate=useNavigate()
  // console.log(currEmployee);
const [update]=useUpdateMutation()
  useEffect(() => {
    if (currEmployee) {
      const { address: currAddress, ...currEmployeeData } =
        currEmployee;
        // console.log("curr employee",currEmployeeData)
        // console.log(currAddress)
// setValues(currEmployeeData);
setValues({...currEmployeeData,dept_id:currEmployeeData.department.id ? currEmployeeData.department.id:2})
 setAddressValues(currAddress);
    }

    //
  }, [currEmployee]);

  return (
    <Content title="Edit Employee">
      <FormCard
        isEdit={true}
        employeeId={values.employeeId}
        values={values}
        onChange={(field: string, value) => {
          setValues({ ...values, [field]: value });
        }}
        addressValues={addressValues}
        addressOnChange={(field: string, value) => {
          setAddressValues({ ...addressValues, [field]: value });
        }}
        handleSave={async(e) => {
          e.preventDefault();
          // const currDept=Object.entries(deptMapping).filter(([key ,value])=> value===values.dept)
          const payload = {
            ...values,
            password:"",
               age:Number(values.age),
           
        
            experience:Number(values.experience),
        
            address: {...addressValues,houseNo:Number(addressValues.houseNo)},

         
            id:id
          };
          // console.log("Update clicked")
        //   const response=await update(payload);
        //           console.log("Successfully updated",response)
        // navigate(`/employee/${id}`)
      update(payload).unwrap().then(()=>{
        console.log("Successfully updated")
        navigate(`/employee/${id}`)
      }).catch((e)=>{
        console.log(e.data.message)
      })
          // const action: AddEmployeeAction = {
          //   type: "employee/UPDATE",
          //   payload: payload,
          // };
          // store.dispatch(action);
        }}
   
      />
    </Content>
  );
};
export default EditEmployee;