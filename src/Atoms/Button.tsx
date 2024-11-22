import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  style: {};
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
