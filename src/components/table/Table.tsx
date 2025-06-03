import "./Table.css";
import type Employee from "../../../entities/employee";
// import employees from "../../../data/employee-data";
import { useSelector } from "react-redux";
import Image from "../image/Image";
import { useNavigate, useSearchParams } from "react-router-dom";
import PopUp from "../../pages/PopUp/PopUp";
import { useState } from "react";
// import store from "../../store-old/store";
// import type { EmployeeState } from "../../store-old/employee/employee.types";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { deleteEmployee } from "../../store/employee/employeeReducer";
import {
  useDeleteMutation,
  useGetEmpQuery,
} from "../../api-services/employees/employees.api";

const Row = ({ emp }: { emp: Employee }) => {
  const navigate = useNavigate();


  if (!emp.id) {
    return;
  } else {
    const empId = emp.id;
  }

  const [idToDelete, setIdToDelete] = useState(emp.id);
  // const dispatch = useAppDispatch();
  const [deleteEmployee] = useDeleteMutation();

  function editHandle() {

    navigate(`/employee/editEmployee/${idToDelete}`);
    
  }
  const [showPopUp, setShowPopUp] = useState(false);

  function handleDelete() {
    setShowPopUp(true);
  }

  return (
    <>
      {showPopUp && (
        <PopUp
          showPopUp={showPopUp}
          confirmDelete={async() => {
            // const action = { type: "employee/DELETE", payload:idToDelete };
            // dispatch(deleteEmployee(idToDelete));
            console.log(idToDelete);
            await deleteEmployee(idToDelete)
              setShowPopUp(false);
              // .unwrap()
              // .then(() => {
              //   console.log("successfully deleted"),
                 
              //       setShowPopUp(false);
                
              // })
              // .catch((e) => {
              //   console.log(e.data.message);
              // });
          }}
          closePopUp={() => setShowPopUp(false)}
        >
          <div>Do you want to delete this?</div>
        </PopUp>
      )}
      <tr className="table-row">
  
            <td>{emp.employeeId}</td>
            <td>{emp.name}</td>
            <td> {emp.dateOfJoining.toString().slice(0,10)}</td>
            <td>{emp.role}</td>
            <td>{emp.status}</td>
            <td>{emp.experience}</td>
            <td>{emp.email}</td>
          

        <td className="action-btns">
          <Image
            source="/assets/edit.png"
            className="edit-btn"
            onClick={editHandle}
          />
          <Image
            source="/assets/delete.png"
            className="delete-btn"
            onClick={handleDelete}
          />
        </td>
      </tr>
    </>
  );
};
const Table = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState("");
  // const employees: Employee[] = useSelector((state) => state.employees);
  // const employees = employeeState.employees;
  const { data: employees } = useGetEmpQuery();

  //  employees = useAppSelector((state) => state.employee.employees);
  const currStatus = searchParams.get("status");
  const filteredEmployees = currStatus
    ? employees?.filter((e) => e.status === currStatus)
    : employees;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {filteredEmployees?.map((employee) => {
            return <Row emp={employee} />;
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
