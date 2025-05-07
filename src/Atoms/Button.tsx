import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  style: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
  const { children, onClick, style } = props;
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
