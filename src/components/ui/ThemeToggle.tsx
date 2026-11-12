"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <button className="icon-button" aria-label="Theme loading" />;

  const dark = theme === "dark";

  return (
    <button
      className="icon-button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      title={`Switch to ${dark ? "light" : "dark"} mode`}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
