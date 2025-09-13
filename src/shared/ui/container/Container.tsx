import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "", style }) => (
  <div className={`mx-auto max-w-[1240px] ${className}`} style={style}>
    {children}
  </div>
);
