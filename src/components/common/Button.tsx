import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  href,
}) => {
  const className = `btn btn-${variant} btn-${size} ${
    disabled ? "disabled" : ""
  }`;

  if (href) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
