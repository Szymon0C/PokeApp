import { useContext, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { ArenaContext } from "../../../../../../../../../../contexts/ArenaContext";
import { EditContext } from "../../../../../../../../../../contexts/EditContext";
import { ThemeContext } from "../../../../../../../../../../contexts/ThemeContext";
import ClearIcon from "@mui/icons-material/Clear";
import useFightResult from "../../../../../../../../../../customHooks/useFightResult";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import axios from "axios";

import * as S from "./style";

export default function Pokemon(prop) {
  const BASE_URL = prop.url;
  const [pokeInfo, setPokeInfo] = useState(null);
  const { status, data } = useQuery([`pokemon${prop.url}`], () => {
    return axios.get(BASE_URL);
  });

  const { win, lose } = useContext(ArenaContext);
  const { updatedPokemon, removePokemon } = useContext(EditContext);
  const { theme } = useContext(ThemeContext);

  const { winResult } = useFightResult(
    parseInt(prop.url?.substring(34)),
    win,
    lose
  );

  useEffect(() => {
    const pokemon = data?.data;
    setPokeInfo({
      image: pokemon?.sprites.front_default || prop.new?.image,
      name:
        pokemon?.name.substring(0, 1).toUpperCase() +
          pokemon?.name.substring(1) || prop.new?.name,
      height: pokemon?.height || prop.new?.height,
      weight: pokemon?.weight || prop.new?.weight,
      experience:
        pokemon?.base_experience + winResult * 10 || prop.new?.experience,
      ability: pokemon?.abilities[0].ability.name || prop.new?.ability,
    });

    updatedPokemon.map((pokemon) => {
      if (parseInt(prop.url.substring(34)) === pokemon.index) {
        setPokeInfo({
          image: pokemon.image,
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
          experience: pokemon.experience + winResult * 10,
          ability: pokemon.ability,
        });
      }
    });
  }, [data]);
  if (!prop.new) {
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
  }

  return (
    <>
      {pokeInfo && (
        <S.PokemonCard theme={theme}>
          <div style={{ display: "flex" }}>
            {prop.new?.index && (
              <S.Icon
                size="small"
                onClick={() => {
                  removePokemon(pokeInfo);
                }}
              >
                <ClearIcon />
              </S.Icon>
            )}

            <S.Image src={pokeInfo.image} alt="pokemon.jpg" />
          </div>

          <S.PokemonName theme={theme}>{pokeInfo.name}</S.PokemonName>

          <S.StatsWrapper>
            <S.StatsWrapperColumn>
              <S.PokemonStatWrapper>
                <S.StatValue theme={theme}>{pokeInfo.height}</S.StatValue>
                <S.StatName theme={theme}>Height</S.StatName>
              </S.PokemonStatWrapper>

              <S.PokemonStatWrapper>
                <S.StatValue theme={theme}>{pokeInfo.weight}</S.StatValue>
                <S.StatName theme={theme}>Weigth</S.StatName>
              </S.PokemonStatWrapper>
            </S.StatsWrapperColumn>

            <S.StatsWrapperColumn>
              <S.PokemonStatWrapper>
                <S.StatValue theme={theme}>{pokeInfo.experience}</S.StatValue>
                <S.StatName theme={theme}>Base experience</S.StatName>
              </S.PokemonStatWrapper>
              <S.PokemonStatWrapper>
                <S.StatValue theme={theme}>{pokeInfo.ability}</S.StatValue>
                <S.StatName theme={theme}>Ability</S.StatName>
              </S.PokemonStatWrapper>
            </S.StatsWrapperColumn>
          </S.StatsWrapper>
        </S.PokemonCard>
      )}
    </>
  );
}
