import "./Select.css";
const Select = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value?: string;
  onChange?: (field: string, value: string) => void;
}) => {
  return (
    <>
      <div className="create-emp-form-group">
        <label htmlFor={label}>{label}</label>
        <select
          name={label}
          className="select-input"
          value={value}
          onChange={onChange}
        >
          {options.map(( value: string) => (
            <option value={value}>{value}</option>
          ))}
        </select>
      </div>
    </>
  );
};
export default Select;
