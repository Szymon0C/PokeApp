import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { IndexContext } from "../../../../../../../../contexts/IndexContext";
import { FavouritePokemonContext } from "../../../../../../../../contexts/FavouritePokemonsContext";

import Fab from "@mui/material/Fab";
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
          </S.PokeHeading>

          <S.PokemonStats>
            <S.PokeStatsRow>
              <S.PokeStatsColumn>
                <div>{pokemon?.height}</div>
                <div>Height</div>
              </S.PokeStatsColumn>

              <S.PokeStatsColumn>
                <div>{pokemon?.weight}</div>
                <div>Weigth</div>
              </S.PokeStatsColumn>
            </S.PokeStatsRow>

            <S.PokeStatsRow>
              <S.PokeStatsColumn>
                <div>{pokemon?.base_experience}</div>
                <div>Base experience</div>
              </S.PokeStatsColumn>

              <S.PokeStatsColumn>
                <div>{pokemon?.abilities[0].ability.name}</div>
                <div>Ability</div>
              </S.PokeStatsColumn>
            </S.PokeStatsRow>
          </S.PokemonStats>
        </S.Pokemon>
      </S.PokemonWrapper>

      <Link to={"/"} onClick={clearIndex}>
        <S.StyledButton>Strona Główna</S.StyledButton>
      </Link>
    </S.Container>
  );
}
