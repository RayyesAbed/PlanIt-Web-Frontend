import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="absolute top-5 right-10">
      <button onClick={handleChangeTheme} className="cursor-pointer">
        {theme === "light" ? (
          <h2 className="flex gap-1 font-bold">
            <Sun />
            Light
          </h2>
        ) : theme === "dark" ? (
          <h2 className="flex gap-1 font-bold">
            <Moon />
            Dark
          </h2>
        ) : (
          <h2 className="flex gap-1 font-bold">
            <Monitor />
            System
          </h2>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
