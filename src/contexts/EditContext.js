import { useState, createContext } from "react";

export const EditContext = createContext();

export const EditProvider = ({ children }) => {
  const [newPokemon, setNewPokemon] = useState([]);
  const [updatedPokemon, setUpdatedPokemon] = useState([]);
  const addNewPokemon = (pokemon) => {
    setNewPokemon([...newPokemon, pokemon]);
  };
  const updatePokemon = (pokemon) => {
    setUpdatedPokemon([...updatedPokemon, pokemon]);
  };
  return (
    <EditContext.Provider
      value={{ newPokemon, updatedPokemon, addNewPokemon, updatePokemon }}
    >
      {children}
    </EditContext.Provider>
  );
};
