"use client";
import { useAuthStore } from "@/entities/user";
import { LoginForm, RegisterForm } from "@/features/auth";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import clsx from "clsx";

export const AuthModal = () => {
  const { isOpenModal, setIsOpenModal, isLoginProcess, setIsLoginProcess } = useAuthStore();
  return (
    <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="relative z-50">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 backdrop-blur-sm">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel
              transition
              className="rounded-4xl max-w-lg space-y-4 border border-gray-300 bg-white p-10 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h4" className="text-2xl font-bold">
                Welcome to SHOP.CO
              </DialogTitle>
              <Description className="text-gray-500">
                Please{" "}
                <button
                  onClick={() => setIsLoginProcess(true)}
                  className={clsx({ "cursor-pointer underline": !isLoginProcess })}
                >
                  log in
                </button>{" "}
                or{" "}
                <button
                  onClick={() => setIsLoginProcess(false)}
                  className={clsx({ "cursor-pointer underline": isLoginProcess })}
                >
                  register
                </button>{" "}
                to continue
              </Description>
              {isLoginProcess ? <LoginForm /> : <RegisterForm />}
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
