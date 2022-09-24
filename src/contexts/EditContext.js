import { useState, createContext } from "react";

export const EditContext = createContext();

export const EditProvider = ({ children }) => {
  const [newPokemon, setNewPokemon] = useState([]);
  const [updatedPokemon, setUpdatedPokemon] = useState([]);
  const addNewPokemon = (pokemon) => {
    if (newPokemon.length < 15) {
      setNewPokemon([...newPokemon, pokemon]);
    }
  };
  const updatePokemon = (pokemon) => {
    setUpdatedPokemon([...updatedPokemon, pokemon]);
  };
  const removePokemon = (pokeInfo) => {
    const choosenPokemon = newPokemon.filter((pokemon) => {
      return pokemon.id !== pokeInfo.id;
    });
    setNewPokemon(choosenPokemon);
  };
  return (
    <EditContext.Provider
      value={{
        newPokemon,
        updatedPokemon,
        addNewPokemon,
        updatePokemon,
        removePokemon,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};
