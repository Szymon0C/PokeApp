import { useState, createContext } from "react";

export const ArenaContext = createContext();

export const ArenaProvider = ({ children }) => {
  const [arenaPokemons, setArenaPokemons] = useState([]);
  const [win, setWin] = useState([]);
  const [lose, setLose] = useState([]);

  const addArenaPokemon = (index) => {
    if (arenaPokemons.length < 2 && !arenaPokemons.includes(index)) {
      setArenaPokemons([...arenaPokemons, index]);
    }
  };

  const removeArenaPokemon = (index) => {
    const choosenPokemon = arenaPokemons.indexOf(index);
    arenaPokemons.splice(choosenPokemon, 1);
    setArenaPokemons([...arenaPokemons]);
  };

  const addWin = (index) => {
    setWin([...win, index]);
  };
  const addLose = (index) => {
    setLose([...lose, index]);
  };

  return (
    <ArenaContext.Provider
      value={{
        arenaPokemons,
        addArenaPokemon,
        removeArenaPokemon,
        setArenaPokemons,
        addWin,
        addLose,
        win,
        lose,
      }}
    >
      {children}
    </ArenaContext.Provider>
  );
};
