import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "gray";
  icon?: React.ElementType;
  classNameIcon?: string;
  loading?: boolean;
};

const variants = {
  default: "bg-white",
  gray: "bg-[#F0F0F0]",
};

export const Input: React.FC<InputProps> = ({
  icon,
  loading = false,
  className = "",
  variant = "default",
  classNameIcon = "",
  ...props
}) => {
  const Icon = !!icon ? (icon as React.ElementType) : null;
  return (
    <div className={clsx(`flex items-center gap-3 relative rounded-full px-4 py-3`, variants[variant], className)}>
      {!!Icon && !loading ? (
        <Icon className={clsx("text-black/40", classNameIcon)} />
      ) : (
        <LoaderCircle className={clsx("text-black/40", "animate-spin")} />
      )}
      <input {...props} className="bg-transparent outline-none placeholder:text-black/40 w-full" />
    </div>
  );
};
