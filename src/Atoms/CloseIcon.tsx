import React from "react";

interface CloseIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  size = 8,
  color = "darkred",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        lineHeight: 0,
        marginLeft: "5px",
      }}
      aria-label="Close"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L15 15"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 1L1 15"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default CloseIcon;
