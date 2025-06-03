import "./FormInput.css";
const FormInput = ({
  label,
  type,
  placeholder,
  className,
  disabled,
  value,
  onChange
}: {
  label?: string;
  type: string;
  placeholder: string;
  className?: string;
  disabled?:boolean;
  value?:string;
  onChange?:(event: React.ChangeEvent<HTMLInputElement> )=>void
}) => {
  if (label) {
    return (
      <>
        <div className="create-emp-form-group ">
           <label htmlFor={label} className="form-label">
            {label}
          </label>
          <input
            type={type}
            placeholder={placeholder}
            className={`form-input-box ${className}`}
            disabled={disabled}
            value={value}
            onChange={onChange}
            
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="single-input-box">
        <input
          type={type}
          placeholder={placeholder}
          className={`form-input-box ${className}`}
          value={value}
            onChange={onChange}
        />
      </div>
    </>
  );
};

export default FormInput;
