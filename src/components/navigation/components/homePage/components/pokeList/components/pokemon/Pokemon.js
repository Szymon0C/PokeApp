import { useContext, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { ArenaContext } from "../../../../../../../../contexts/ArenaContext";
import { EditContext } from "../../../../../../../../contexts/EditContext";

import ClearIcon from "@mui/icons-material/Clear";
import useFightResult from "../../../../../../../../customHooks/useFightResult";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import axios from "axios";

import * as S from "./style";

export default function Pokemon(prop) {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${
    prop.edit?.index || prop.url
  }`;
  const { status, data } = useQuery([`pokemon${prop.url}`], () => {
    return axios.get(BASE_URL);
  });
  const { win, lose } = useContext(ArenaContext);
  const { updatedPokemon, removePokemon } = useContext(EditContext);

  const { winResult } = useFightResult(prop.url, win, lose);
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

  const pokeInfo = {
    image: prop.edit?.index || prop.url,
    name:
      prop.edit?.name ||
      pokemon?.name.substring(0, 1).toUpperCase() + pokemon?.name.substring(1),
    height: prop.edit?.height || pokemon?.height,
    weight: prop.edit?.weight || pokemon?.weight,
    experience:
      prop.edit?.experience + winResult * 10 ||
      pokemon?.base_experience + winResult * 10,
    ability: prop.edit?.ability || pokemon?.abilities[0].ability.name,
  };

  updatedPokemon.map((pokemon) => {
    if (prop.url === pokemon.index) {
      pokeInfo.name = pokemon.name;
      pokeInfo.height = pokemon.height;
      pokeInfo.weight = pokemon.weight;
      pokeInfo.experience = pokemon.experience + winResult * 10;
      pokeInfo.ability = pokemon.ability;
    }
  });

  return (
    <S.PokemonCard>
      <div style={{ display: "flex" }}>
        {prop.edit?.index && (
          <S.Icon
            size="small"
            onClick={() => {
              removePokemon(pokeInfo);
            }}
          >
            <ClearIcon />
          </S.Icon>
        )}
        <S.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            prop.edit?.index || prop.url
          }.png
        `}
          alt="pokemon.jpg"
        />
      </div>

      <S.PokemonName>{pokeInfo.name}</S.PokemonName>

      <S.StatsWrapper>
        <S.StatsWrapperColumn>
          <S.PokemonStatWrapper>
            <S.StatValue>{pokeInfo.height}</S.StatValue>
            <S.StatName>Height</S.StatName>
          </S.PokemonStatWrapper>

          <S.PokemonStatWrapper>
            <S.StatValue>{pokeInfo.weight}</S.StatValue>
            <S.StatName>Weigth</S.StatName>
          </S.PokemonStatWrapper>
        </S.StatsWrapperColumn>

        <S.StatsWrapperColumn>
          <S.PokemonStatWrapper>
            <S.StatValue>{pokeInfo.experience}</S.StatValue>
            <S.StatName>Base experience</S.StatName>
          </S.PokemonStatWrapper>
          <S.PokemonStatWrapper>
            <S.StatValue>{pokeInfo.ability}</S.StatValue>
            <S.StatName>Ability</S.StatName>
          </S.PokemonStatWrapper>
        </S.StatsWrapperColumn>
      </S.StatsWrapper>
    </S.PokemonCard>
  );
}
