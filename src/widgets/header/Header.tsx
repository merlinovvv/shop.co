import { AuthButton } from "@/features/auth";
import { SearchProducts } from "@/features/search-products";
import { Container } from "@/shared/ui";
import { HeaderMenu, Logo } from "@/widgets/header";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AuthModal } from "../auth-modal";

export const Header: React.FC = () => {
  return (
    <header className="my-6">
      <Container>
        <div className="flex items-center gap-10">
          <Logo />
          <HeaderMenu />
          <SearchProducts />
          <div className="flex items-center gap-4">
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
