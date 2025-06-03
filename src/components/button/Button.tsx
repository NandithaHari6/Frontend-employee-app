import "./Button.css";
import React from "react";
const Button = ({
  title,
  className,
  disabled,
  onClick,
}: {
  title: string;
  className?: string;
  disabled?:boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>)=> void;
}) => {
  return <button type="button" className={`common-btn + ${className}`} disabled={disabled} onClick={onClick}> {title}</button>;
};
export default Button;
