import { useContext, useState } from "react";

import { IndexContext } from "../../../../contexts/IndexContext";
import { EditContext } from "../../../../contexts/EditContext";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import EditIcon from "@mui/icons-material/Edit";

import { useFormik } from "formik";
import * as S from "./style";
import { pokemonEditSchema } from "../../../../schemas";
import { useNavigate } from "react-router-dom";
export default function PokemonEdit() {
  const { index } = useContext(IndexContext);
  const { addNewPokemon, updatePokemon } = useContext(EditContext);
  const [choice, setChoice] = useState(null);
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}`;
  const navigate = useNavigate();
  const { data } = useQuery([`pokemon${index}`], () => {
    if (index) {
      return axios.get(BASE_URL);
    }
  });
  const pokemon = data?.data;

  const onSubmit = (values) => {
    if (choice === "edit") {
      updatePokemon(values);
    } else {
      addNewPokemon(values);
    }
    navigate("/edit");
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      index: index,
      name:
        pokemon?.name.substring(0, 1).toUpperCase() +
        pokemon?.name.substring(1),
      ability: pokemon?.abilities[0].ability.name,
      height: pokemon?.height,
      weight: pokemon?.weight,
      experience: pokemon?.base_experience,
    },
    validationSchema: pokemonEditSchema,
    onSubmit,
  });

  return (
    <S.StyledForm onSubmit={handleSubmit}>
      <S.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png
        `}
        alt="pokemon.jpg"
      />

      <S.InputWrapper>
        <S.PokemonName
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={
            pokemon?.name.substring(0, 1).toUpperCase() +
            pokemon?.name.substring(1)
          }
          id="name"
        />
        <EditIcon />
      </S.InputWrapper>

      <S.StatsRow>
        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              placeholder={pokemon?.height}
              value={values.height}
              onChange={handleChange}
              onBlur={handleBlur}
              id="height"
            />
            <S.GreyIcon fontSize="small" />
          </S.InputWrapper>
          <span>Height</span>
        </S.StatWrapper>

        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              placeholder={pokemon?.weight}
              value={values.weight}
              onChange={handleChange}
              onBlur={handleBlur}
              id="weight"
            />
            <S.GreyIcon fontSize="small" />
          </S.InputWrapper>
          <span>Weigth</span>
        </S.StatWrapper>
      </S.StatsRow>

      <S.StatsRow>
        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              placeholder={pokemon?.base_experience}
              value={values.experience}
              onChange={handleChange}
              onBlur={handleBlur}
              id="experience"
            />
            <S.GreyIcon fontSize="small" />
          </S.InputWrapper>
          <span> Experience</span>
        </S.StatWrapper>

        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              placeholder={pokemon?.abilities[0].ability.name}
              value={values.ability}
              onChange={handleChange}
              onBlur={handleBlur}
              id="ability"
            />
            <S.GreyIcon fontSize="small" />
          </S.InputWrapper>
          <span>Ability</span>
        </S.StatWrapper>
      </S.StatsRow>
      <S.ButtonWrapper>
        <S.StyledButton
          type="submit"
          onClick={() => {
            setChoice("edit");
          }}
        >
          save
        </S.StyledButton>
        <S.StyledButton
          type="submit"
          onClick={() => {
            setChoice("new");
          }}
        >
          save as new Pokemon
        </S.StyledButton>
      </S.ButtonWrapper>
    </S.StyledForm>
  );
}
