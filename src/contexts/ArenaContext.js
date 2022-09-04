import { useState, createContext } from "react";

export const ArenaContext = createContext();

export const ArenaProvider = ({ children }) => {
  const [arenaPokemons, setArenaPokemons] = useState([]);

  const addArenaPokemon = (index) => {
    if (arenaPokemons.length < 2) {
      setArenaPokemons([...arenaPokemons, index]);
    }
  };

  const removeArenaPokemon = (index) => {
    const choosenPokemon = arenaPokemons.indexOf(index);
    arenaPokemons.splice(choosenPokemon, 1);
    setArenaPokemons([...arenaPokemons]);
  };

  return (
    <ArenaContext.Provider
      value={{ arenaPokemons, addArenaPokemon, removeArenaPokemon }}
    >
      {children}
    </ArenaContext.Provider>
  );
};
