import FormInput from "../../components/input-for-form/FormInput";
// import InputBox from "../../components/input-for-form/InputBox";
import Select from "../../components/select-element/Select";
import Button from "../../components/button/Button";
import "./FormCard.css";
import moment from "moment";
import type Employee from "../../../entities/employee";
import type { Address } from "../../../entities/employee";
import { useGetDeptQuery } from "../../api-services/department/department.api";
const FormCard = ({
  isEdit,
  employeeId,
  values,
  onChange,
  addressValues,
  addressOnChange,
  handleSave,
  handleSubmit,
  clearForm,
}: {
  isEdit: boolean;
  employeeId?: string;
  values: Employee;
  onChange: (field: string, value: string | Date) => void;
  addressValues?: Address;
  addressOnChange?: (field: string, value: string | number) => void;
  handleSave?: (e) => void;
  handleSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clearForm?: () => void;
}) => {
  const { data: dept } = useGetDeptQuery();
  const dept_names = dept?.map((d) => {
   return  d.dept_name;
  })||[];
 function getDeptName(dept_id){
  const currDept=dept?.find((d)=>d.id===dept_id)
  
  return currDept?.dept_name
 }
  return (
    <>
      <div className="form">
        <div className="row">
          <FormInput
            label="Employee Name"
            type="text"
            placeholder="Employee Name"
            value={values.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
          <FormInput
            label="Joining Date"
            type="date"
            placeholder="Joining Date"
            value={moment(values.dateOfJoining)
              .format("YYYY-MM-DD")
              .slice(0, 10)}
            onChange={(e) => onChange("dateOfJoining", e.target.value)}
          />
          <FormInput
            label="Experience (Yrs)"
            type="text"
            placeholder="2"
            value={values.experience}
            onChange={(e) => onChange("experience", e.target.value)}
          />
        </div>
        <div className="row">
          <Select
            value={values.role}
            onChange={(e) => onChange("role", e.target.value)}
            label="Role"
            options={["HR", "DEVELOPER", "UI"]}
          />
          <Select
            value={getDeptName(values.dept_id)}
            onChange={(e) => {
              const currDept = dept?.find(
                (d) => d.dept_name === e.target.value
              );
              onChange("dept_id", currDept.id);
            }}
            label="Department"
            options={dept_names}
          />
          {/* <FormInput
            label="Department"
            type="number"
            placeholder="3"
            value={values.dept_id}
            onChange={(e) => onChange("dept_id", e.target.value)}
          /> */}
          <Select
            value={values.status}
            onChange={(e) => onChange("status", e.target.value)}
            label="Status"
            options={["ACTIVE", "INACTIVE", "PROBATION"]}
          />
        </div>
        <div className="row">
          <FormInput
            label="Email"
            type="email"
            placeholder="employee@gmail.com"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
          <FormInput
            label="Age (Yrs)"
            type="number"
            placeholder="2"
            value={values.age}
            onChange={(e) => onChange("age", e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="***"
            disabled={isEdit}
            onChange={(e) => onChange("password", e.target.value)}
          />
        </div>
        <div className="row">
          <div className="address">
            <label>Address</label>
            <FormInput
              type="text"
              placeholder="House No"
              value={addressValues.houseNo}
              onChange={(e) => addressOnChange("houseNo", e.target.value)}
              c
            />
            <FormInput
              type="text"
              placeholder="line1"
              value={addressValues.line1}
              onChange={(e) => addressOnChange("line1", e.target.value)}
            />
            <FormInput
              type="text"
              placeholder="line2"
              value={addressValues.line2}
              onChange={(e) => addressOnChange("line2", e.target.value)}
            />
            <FormInput
              type="text"
              placeholder="pincode"
              value={addressValues.pincode}
              onChange={(e) => addressOnChange("pincode", e.target.value)}
            />
          </div>

          <FormInput
            label="Employee ID"
            type="text"
            placeholder={isEdit ? employeeId : "E-1234"}
            disabled={isEdit ? true : false}
            onChange={(e) => onChange("employeeId", e.target.value)}
          />
        </div>
        <div className="buttons">
          {isEdit ? (
            <Button title="Save" className="primary-btn" onClick={handleSave} />
          ) : (
            <Button
              title="Submit"
              className="primary-btn"
              onClick={handleSubmit}
            />
          )}
          <Button
            title="Cancel"
            className="secondary-btn"
            onClick={clearForm}
          />
        </div>
      </div>
    </>
  );
};
export default FormCard;