import "./Input.css";

const Input = ({
  label,
  type,
  placeholder,
  className,
  value,
  onChange,
  ref,
  ariaInput,
  endAdornment
}: {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<null | HTMLInputElement>;
  ariaInput?:string,
  endAdornment?:React.ReactNode
}) => {
    // console.log("Rerender")
  return (
    <>
      <div className="form-group">
        <label htmlFor={ariaInput} className="for">
          {label}
        </label>
        <div className="input-field">
      
        <input
          type={type}
          placeholder={placeholder}
          className={`input-box ${className}`}
          value={value}
          onChange={onChange}
          id={ariaInput}

          aria-label={ariaInput}
          ref={ref}
        />
        {endAdornment && endAdornment}
          </div>
      </div>
    </>
  );
};
export default Input;
