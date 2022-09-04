import { useContext, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { IndexContext } from "../../../../../../../../contexts/IndexContext";
import { FavouritePokemonContext } from "../../../../../../../../contexts/FavouritePokemonsContext";

import FavoriteIcon from "@mui/icons-material/Favorite";

import * as S from "./style";

export default function FullPagePokemon() {
  const { index, clearIndex } = useContext(IndexContext);
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}`;

  const { data } = useQuery([`pokemon${index}`], () => {
    return axios.get(BASE_URL);
  });

  const { favPokemons, addPokemon, removePokemon } = useContext(
    FavouritePokemonContext
  );

  const [color, setColor] = useState("default");
  useEffect(() => {
    if (favPokemons.includes(index)) {
      setColor("error");
    }
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
  const pokemon = data?.data;
  return (
    <S.Container>
      <S.PokemonWrapper>
        <S.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png
        `}
          alt="pokemon.jpg"
        />
        <S.Pokemon>
          <S.PokeHeading>
            <h1>
              {pokemon?.name.substring(0, 1).toUpperCase() +
                pokemon?.name.substring(1)}
            </h1>

            <S.FavIcon
              aria-label="like"
              color={color}
              onClick={favPokemonAction}
            >
              <FavoriteIcon />
            </S.FavIcon>
            <S.ArenaIcon color="secondary">
              <S.FightIcon src="/fight.svg" />
            </S.ArenaIcon>
          </S.PokeHeading>

          <S.PokemonStats>
            <S.PokeStatsColumn>
              <S.PokeStatsWrapper>
                <S.StatValue>{pokemon?.height}</S.StatValue>
                <span>Height</span>
              </S.PokeStatsWrapper>

              <S.PokeStatsWrapper>
                <S.StatValue>{pokemon?.weight}</S.StatValue>
                <span>Weigth</span>
              </S.PokeStatsWrapper>
            </S.PokeStatsColumn>

            <S.PokeStatsColumn>
              <S.PokeStatsWrapper>
                <S.StatValue>{pokemon?.base_experience}</S.StatValue>
                <span>Base experience</span>
              </S.PokeStatsWrapper>

              <S.PokeStatsWrapper>
                <S.StatValue>{pokemon?.abilities[0].ability.name}</S.StatValue>
                <span>Ability</span>
              </S.PokeStatsWrapper>
            </S.PokeStatsColumn>
          </S.PokemonStats>
        </S.Pokemon>
      </S.PokemonWrapper>

      <S.StyledLink to={"/"} onClick={clearIndex}>
        <S.StyledButton>Strona Główna</S.StyledButton>
      </S.StyledLink>
    </S.Container>
  );
}
