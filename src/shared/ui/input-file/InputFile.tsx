'use client'
import { FC, useRef } from "react";
import { Button } from "../button/Button";

export interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  loading?: boolean;
}

export const InputFile: FC<InputFileProps> = ({ label = "Upload", loading, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} hidden type="file" {...props} />
      <Button loading={loading} type="button" className="w-full" size="small" variant="outlined" onClick={() => inputRef.current?.click()}>
        {label}
      </Button>
    </div>
  );
};
