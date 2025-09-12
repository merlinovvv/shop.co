'use client';
import { CircleUserRound } from "lucide-react";
import { Fragment } from "react";
import { useAuthStore } from "@/entities/user";

export const AuthButton = () => {
    const { setIsOpenModal } = useAuthStore();
    return (
      <Fragment>
        <button className="cursor-pointer" onClick={() => setIsOpenModal(true)} aria-label="User Account">
          <CircleUserRound />
        </button>
      </Fragment>
    );
};