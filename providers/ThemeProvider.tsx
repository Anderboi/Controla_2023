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
  };

  return (
    <div className="app-container">
      <button onClick={toggleTheme}>Переключить тему</button>
      {children}
    </div>
  );
};

export default ThemeProvider;
