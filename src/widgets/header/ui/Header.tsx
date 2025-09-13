"use client";
import { AuthButton } from "@/features/auth";
import { SearchProducts } from "@/features/search-products";
import { Container } from "@/shared/ui";
import { HeaderMenu, Logo, useHeaderStore } from "@/widgets/header";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { AuthModal } from "../../auth-modal";

export const Header: React.FC = () => {
  const { setHeaderHeight } = useHeaderStore();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef?.current) {
      setHeaderHeight(headerRef.current);
    }
  }, [headerRef?.current]);

  return (
    <header ref={headerRef} className="py-6">
      <Container>
        <div className="flex items-center md:gap-10 gap-4">
          <Logo />
          <HeaderMenu />

          <div className="flex items-center gap-4 order-3 flex-auto justify-end">
            <SearchProducts />
            <Link href="/cart">
              <ShoppingCart />
            </Link>
            <AuthButton />
            <AuthModal />
          </div>
        </div>
      </Container>
    </header>
  );
};
