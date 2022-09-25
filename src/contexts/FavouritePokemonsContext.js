import { createContext, useState } from "react";

export const FavouritePokemonContext = createContext();

export const FavouritePokemonProvider = ({ children }) => {
  const [favPokemons, setFavPokemons] = useState([]);
  const addPokemon = (index) => {
    setFavPokemons([...favPokemons, index]);
  };
  const removePokemon = (index) => {
    const choosenPokemon = favPokemons.indexOf(index);
    favPokemons.splice(choosenPokemon, 1);
    setFavPokemons([...favPokemons]);
  };

  return (
    <FavouritePokemonContext.Provider
      value={{ favPokemons, addPokemon, removePokemon }}
    >
      {children}
    </FavouritePokemonContext.Provider>
  );
};
