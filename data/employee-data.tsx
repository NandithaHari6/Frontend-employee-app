import type Employee from "../entities/employee"
const employees: Employee[] = [
  {
    employeeId: "12345",
    name: "Employee1",
    dateOfJoining: "21/05/2025",
    role: "HR",
    status: "ACTIVE",
    experience: 4,
    email: "email@gmail.com",
    age:32,
    password:"pass1",
    dept:"AI",
    


  },{
    employeeId: "12346",
    name: "Employee2",
    dateOfJoining: "22/05/2025",
    role: "DEVELOPER",
    status: "INACTIVE",
    experience: 2,
    email: "email2@gmail.com",
        age:42,
    password:"pass2",
    dept:"",
  }
];


export default employees