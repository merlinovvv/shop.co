"use client";

import { ReactNode, useRef, type FC } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./store";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};
