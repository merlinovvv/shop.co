import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  severity?: "primary" | "secondary";
  variant?: "filled" | "outlined";
  size?: "small" | "medium";
  loading?: boolean;
  label?: string;
}

const classNames = {
    className: "cursor-pointer px-6 rounded-full relative",
    size: {
        small: "py-3",
        medium: "py-[15px]",
    },
    primary: {
        filled: "bg-black text-white",
        outlined: "bg-transparent border border-black text-black",
    },
    secondary: {
        filled: "bg-white text-black",
        outlined: "bg-transparent border border-black/10 text-black",
    }
};

export const Button: FC<ButtonProps> = ({ severity = "primary", variant = "filled", size = "medium", loading = false, label = '', className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${classNames.className} ${classNames.size[size]} ${classNames[severity][variant]} ${className}`}
    >
      {loading && <LoaderCircle className="absolute animate-spin top-1/2 left-3 transform -translate-x-0 -translate-y-1/2" />}
      {children}
    </button>
  );
};
