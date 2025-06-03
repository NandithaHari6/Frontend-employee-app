export default interface Employee {
  id:number,
  employeeId: string;
  name: string;
  dateOfJoining: Date;
  role: string;
  status: string;
  experience: number;
  email: string;
  dept_id:number;
  age:number;
  password:string;
  address?:Address;
}

// export const EmployeeRole = {
//   UI: "UI",
//   UX: "UX",
//   DEVELOPER: "DEVELOPER",
//   HR: "HR",
// } as const;

// export type Role = (typeof EmployeeRole)[keyof typeof EmployeeRole];

// export const EmployeeStatus = {
//   ACTIVE: "ACTIVE",
//   INACTIVE: "INACTIVE",
//   PROBATION: "PROBATION",
// } as const;

// export type Status = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];

export interface Address{
  houseNo:number,
  line1:string;
  line2:string;
  pincode:string;
}