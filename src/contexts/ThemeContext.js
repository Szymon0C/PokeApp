import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [choice] = useState({
    light: {
      name: "light",
      backgroundColor: "#fdeaee",
      color: "#051713",
      color2: "#eb3458",
    },
    dark: {
      name: "dark",
      backgroundColor: "#121212",
      color: "#3700b3",
      color2: "#bb86fc",
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
