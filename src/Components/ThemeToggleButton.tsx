"use client";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full bg-[var(--hover)] dark:bg-[var(--primary)] dark:text-white text-white hover:bg-[var(--hover)] hover:text-white transition-all duration-300 outline-none border-none w-20 h-20 flex items-center justify-center text-center"
      >
        { theme === "dark" ? 
            <h3 className="text-white">Light</h3> 
            : <h3 className="text-white">Dark</h3> 
        }
      </Button>
    </div>
  );
}
