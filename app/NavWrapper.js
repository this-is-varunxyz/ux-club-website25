"use client";
import { useState } from "react";
import Nav from "../components/Nav";

export default function NavWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
  );
}
