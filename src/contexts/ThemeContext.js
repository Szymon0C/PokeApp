import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [choice] = useState({
    light: {
      name: "light",
      backgroundColor: "#fdeaee",
      color: "#051713",
      color2: "#13c09e",
    },
    dark: {
      name: "dark",
      backgroundColor: "#2f0a11",
      color: "#f9c2cc",
      color2: "#fdeaee",
    },
  });
  const [theme, setTheme] = useState(choice.light);

  const changeTheme = () => {
    setTheme(theme === choice.light ? choice.dark : choice.light);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
