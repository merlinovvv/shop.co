"use client";
import { useAuthStore } from "@/entities/user";
import { Container } from "@/shared/ui";
import { X } from "lucide-react";
import { FC, useEffect, useState } from "react";

export const PromoBanner: FC = () => {
  const { setIsOpenModal, tokens } = useAuthStore();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(!tokens);
  }, [tokens])
  
  return (
    showBanner && (
      <div className="pt-[9px] pb-2.5 bg-black text-white text-center">
        <Container className="relative">
          Sign up and get 20% off to your first order.{" "}
          <button onClick={() => setIsOpenModal(true)} className="underline cursor-pointer">
            Sign Up Now
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <X />
          </button>
        </Container>
      </div>
    )
  );
};
