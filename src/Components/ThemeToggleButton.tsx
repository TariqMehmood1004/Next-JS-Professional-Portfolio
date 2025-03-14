"use client";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import ZapIcon from "./Icons/ZapIcon";
import ZapBulkIcon from "./Icons/ZapBulkIcon";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full outline-none border-none w-20 h-20 flex items-center justify-center text-center"
      >
        { theme === "dark" ? 
            <ZapIcon className="w-6 h-6 text-gray-900 dark:text-white" color="#f3f3f3" /> 
            : <ZapBulkIcon className="w-6 h-6 text-gray-400 dark:text-white" color="#f3f3f3" /> 
        }
      </Button>
    </div>
  );
}
