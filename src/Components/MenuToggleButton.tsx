"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import Drawer from "./Drawer";

export default function MenuToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={toggleMenu}
        className="rounded-full dark:bg-[var(--background)] bg-[var(--primary)] transition-all duration-300 outline-none border-none w-20 h-20 flex flex-col items-center justify-center text-center"
      >
        <div className="w-12 h-1 dark:bg-[var(--primary)] bg-[var(--background)] rounded-full transition-all duration-300"></div>
        <div className="w-12 h-1 dark:bg-[var(--primary)] bg-[var(--background)] rounded-full transition-all duration-300"></div>
        <div className="w-12 h-1 dark:bg-[var(--primary)] bg-[var(--background)] rounded-full transition-all duration-300"></div>
      </Button>
      {isOpen && <Drawer isOpen={isOpen} toggleMenu={toggleMenu} />}
    </div>
  );
}
