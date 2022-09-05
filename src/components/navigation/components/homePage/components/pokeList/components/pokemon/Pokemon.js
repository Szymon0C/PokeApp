import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import { ArenaContext } from "../../../../../../../../contexts/ArenaContext";

import useFightResult from "../../../../../../../../customHooks/useFightResult";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import axios from "axios";

import * as S from "./style";

export default function Pokemon(prop) {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${prop.url}`;
  const { status, data } = useQuery([`pokemon${prop.url}`], () => {
    return axios.get(BASE_URL);
  });
  const { win, lose } = useContext(ArenaContext);
  const { winResult, loseResult } = useFightResult(prop.url, win, lose);
  const pokemon = data?.data;
  if (status === "loading") {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  if (status === "error") {
    return <h2>Error!</h2>;
  }
  return (
    <S.PokemonCard>
      <S.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${prop.url}.png
        `}
        alt="pokemon.jpg"
      />
      <S.PokemonName>
        {pokemon?.name.substring(0, 1).toUpperCase() +
          pokemon?.name.substring(1)}
      </S.PokemonName>

      <S.StatsWrapper>
        <S.StatsWrapperColumn>
          <S.PokemonStatWrapper>
            <S.StatValue>{pokemon?.height}</S.StatValue>
            <S.StatName>Height</S.StatName>
          </S.PokemonStatWrapper>

          <S.PokemonStatWrapper>
            <S.StatValue>{pokemon?.weight}</S.StatValue>
            <S.StatName>Weigth</S.StatName>
          </S.PokemonStatWrapper>
        </S.StatsWrapperColumn>

        <S.StatsWrapperColumn>
          <S.PokemonStatWrapper>
            <S.StatValue>
              {pokemon?.base_experience + winResult * 10}
            </S.StatValue>
            <S.StatName>Base experience</S.StatName>
          </S.PokemonStatWrapper>
          <S.PokemonStatWrapper>
            <S.StatValue>{pokemon?.abilities[0].ability.name}</S.StatValue>
            <S.StatName>Ability</S.StatName>
          </S.PokemonStatWrapper>
        </S.StatsWrapperColumn>
      </S.StatsWrapper>
    </S.PokemonCard>
  );
}
