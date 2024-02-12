import ThemeSwitcher from '@/components/feature/sidebar/ThemeSwitcher';
import { useState, useEffect } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({
  children,
}: ThemeProviderProps): React.ReactElement => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
    
  };

  return (
    <div className="app-container">
      {/* <ThemeSwitcher onClick={toggleTheme} /> */}
      <button onClick={toggleTheme}>Переключить тему</button>
      {children}
    </div>
  );
};

export default ThemeProvider;
