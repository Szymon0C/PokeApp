import { useState, createContext } from "react";

export const IndexContext = createContext();

export const IndexProvider = ({ children }) => {
  const [index, setIndex] = useState(null);
  const clearIndex = () => {
    setIndex(null);
  };

  return (
    <IndexContext.Provider value={{ index, setIndex, clearIndex }}>
      {children}
    </IndexContext.Provider>
  );
};
