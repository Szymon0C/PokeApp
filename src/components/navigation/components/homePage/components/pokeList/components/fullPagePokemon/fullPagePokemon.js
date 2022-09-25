import { useContext, useEffect, useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { ArenaContext } from "../../../../../../../../contexts/ArenaContext";
import { EditContext } from "../../../../../../../../contexts/EditContext";
import { FavouritePokemonContext } from "../../../../../../../../contexts/FavouritePokemonsContext";
import { IndexContext } from "../../../../../../../../contexts/IndexContext";
import { ThemeContext } from "../../../../../../../../contexts/ThemeContext";
import useFightResult from "../../../../../../../../customHooks/useFightResult";
import * as S from "./style";

export default function FullPagePokemon() {
  const { index, clearIndex } = useContext(IndexContext);
  const { updatedPokemon } = useContext(EditContext);
  const { theme } = useContext(ThemeContext);

  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}`;

  const { data, status } = useQuery([`pokemon${index}`], () => {
    if (index) {
      return axios.get(BASE_URL);
    }
  });
  const { arenaPokemons, addArenaPokemon, removeArenaPokemon, win, lose } =
    useContext(ArenaContext);

  const { favPokemons, addPokemon, removePokemon } = useContext(
    FavouritePokemonContext
  );

  const { winResult, loseResult } = useFightResult(index, win, lose);

  const [color, setColor] = useState("default");
  const [arenaColor, setArenaColor] = useState("default");

  useEffect(() => {
    if (favPokemons.includes(index)) {
      setColor("error");
    }
    if (arenaPokemons.includes(index)) {
      setArenaColor("secondary");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const favPokemonAction = () => {
    if (color === "default") {
      setColor("error");
      addPokemon(index);
    } else {
      setColor("default");
      removePokemon(index);
    }
  };

  const arenaPokemonAction = () => {
    if (arenaColor === "default") {
      if (arenaPokemons.length < 2) {
        setArenaColor("secondary");
        addArenaPokemon(index);
      }
    } else {
      setArenaColor("default");
      removeArenaPokemon(index);
    }
  };

  const pokemon = data?.data;

  const pokeInfo = {
    image: pokemon?.sprites.front_default,
    name:
      pokemon?.name.substring(0, 1).toUpperCase() + pokemon?.name.substring(1),
    height: pokemon?.height,
    weight: pokemon?.weight,
    experience: pokemon?.base_experience + winResult * 10,
    ability: pokemon?.abilities[0].ability.name,
  };
  // eslint-disable-next-line
  updatedPokemon.map((pokemon) => {
    if (index === pokemon.index) {
      pokeInfo.name = pokemon.name;
      pokeInfo.height = pokemon.height;
      pokeInfo.weight = pokemon.weight;
      pokeInfo.experience = pokemon.experience + winResult * 10;
      pokeInfo.ability = pokemon.ability;
    }
  });
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
    <S.Container>
      {index && (
        <S.PokemonWrapper>
          <S.Image src={pokeInfo.image} alt="pokemon.jpg" />
          <S.Pokemon>
            <S.PokeHeading>
              <S.PokemonName theme={theme}>{pokeInfo.name}</S.PokemonName>

              <S.FavIcon
                aria-label="like"
                color={color}
                onClick={favPokemonAction}
              >
                <FavoriteIcon />
              </S.FavIcon>
              <S.ArenaIcon color={arenaColor} onClick={arenaPokemonAction}>
                <S.FightIcon
                  src="https://www.svgrepo.com/show/254372/sword-fight.svg"
                  color={arenaColor}
                />
              </S.ArenaIcon>
            </S.PokeHeading>

            <S.PokemonStats>
              <S.PokeStatsColumn>
                <S.PokeStatsWrapper>
                  <S.StatValue>{pokeInfo.height}</S.StatValue>
                  <S.StatName theme={theme}>Height</S.StatName>
                </S.PokeStatsWrapper>

                <S.PokeStatsWrapper>
                  <S.StatValue>{pokeInfo.weight}</S.StatValue>
                  <S.StatName theme={theme}>Weigth</S.StatName>
                </S.PokeStatsWrapper>

                <S.PokeStatsWrapper>
                  <S.StatValue>{winResult}</S.StatValue>
                  <S.StatName theme={theme}>Wins</S.StatName>
                </S.PokeStatsWrapper>
              </S.PokeStatsColumn>

              <S.PokeStatsColumn>
                <S.PokeStatsWrapper>
                  <S.StatValue>{pokeInfo.experience}</S.StatValue>
                  <S.StatName theme={theme}>Base experience</S.StatName>
                </S.PokeStatsWrapper>

                <S.PokeStatsWrapper>
                  <S.StatValue>{pokeInfo.ability}</S.StatValue>
                  <S.StatName theme={theme}>Ability</S.StatName>
                </S.PokeStatsWrapper>

                <S.PokeStatsWrapper>
                  <S.StatValue>{loseResult}</S.StatValue>
                  <S.StatName theme={theme}>Loses</S.StatName>
                </S.PokeStatsWrapper>
              </S.PokeStatsColumn>
            </S.PokemonStats>
          </S.Pokemon>
        </S.PokemonWrapper>
      )}

      <S.StyledLink to={"/"} onClick={clearIndex}>
        <S.StyledButton theme={theme}>Strona Główna</S.StyledButton>
      </S.StyledLink>
    </S.Container>
  );
}
