import { HeaderMenu, InputSearch, Logo } from "@/features/header";
import { Container } from "@/shared/ui/container";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="my-6">
      <Container>
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Logo />
          {/* Navigation Menu */}
          <HeaderMenu />
          {/* Search Input */}
          <InputSearch />
        </div>
      </Container>
    </header>
  );
};
