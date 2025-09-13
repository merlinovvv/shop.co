import { ButtonHTMLAttributes, FC } from "react";

interface BurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const BurgerButton: FC<BurgerButtonProps> = ({ active = false, className = '', ...props }) => {
  return (
    <button {...props} className={`burger-button ${active ? "active" : ""} ${className}`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
