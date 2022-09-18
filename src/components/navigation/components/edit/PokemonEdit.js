import { useContext } from "react";

import { IndexContext } from "../../../../contexts/IndexContext";

import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import * as S from "./style";
export default function PokemonEdit() {
  const { index } = useContext(IndexContext);
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}`;

  const { data } = useQuery([`pokemon${index}`], () => {
    if (index) {
      return axios.get(BASE_URL);
    }
  });
  const pokemon = data?.data;

  return (
    <form>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png
        `}
        alt="pokemon.jpg"
      />
      <S.PokemonName
        placeholder={
          pokemon?.name.substring(0, 1).toUpperCase() +
          pokemon?.name.substring(1)
        }
      />

      <S.StyledInput placeholder={pokemon?.height} />
      <span>Height</span>
      <S.StyledInput placeholder={pokemon?.weight} />
      <span>Weigth</span>
      <S.StyledInput placeholder={pokemon?.base_experience} />
      <span> Experience</span>
      <S.StyledInput placeholder={pokemon?.abilities[0].ability.name} />
      <span>Ability</span>
    </form>
  );
}
