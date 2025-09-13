import { Fragment, ReactNode, type FC } from "react";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {

  return <Fragment>{children}</Fragment>;
};
