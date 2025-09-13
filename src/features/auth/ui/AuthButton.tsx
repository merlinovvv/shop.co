"use client";
import { CircleUserRound } from "lucide-react";
import { Fragment } from "react";
import { useAuthStore, UserAvatar } from "@/entities/user";

export const AuthButton = () => {
  const { setIsOpenModal, authData, logout } = useAuthStore();

  return (
    <Fragment>
      {authData?.avatar ? (
        <UserAvatar {...authData} logout={logout} />
      ) : (
        <button className="cursor-pointer" onClick={() => setIsOpenModal(true)} aria-label="User Account">
          <CircleUserRound />
        </button>
      )}
    </Fragment>
  );
};
