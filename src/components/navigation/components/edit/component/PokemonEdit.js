import { useContext, useState } from "react";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { EditContext } from "../../../../../contexts/EditContext";
import { IndexContext } from "../../../../../contexts/IndexContext";
import { ThemeContext } from "../../../../../contexts/ThemeContext";
import { pokemonEditSchema } from "../../../../../schemas";
import * as S from "./style";

export default function PokemonEdit({ value }) {
  const { theme } = useContext(ThemeContext);
  const { index } = useContext(IndexContext);
  const { addNewPokemon, updatePokemon } = useContext(EditContext);
  const [choice, setChoice] = useState(null);

  const navigate = useNavigate();

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
      id: Math.random(),
      index: index,
      image: value.sprites.front_default,
      name: value.name.substring(0, 1).toUpperCase() + value.name.substring(1),
      ability: value.abilities[0].ability.name,
      height: value.height,
      weight: value.weight,
      experience: value.base_experience,
    },
    validationSchema: pokemonEditSchema,
    onSubmit,
  });

  return (
    <S.StyledForm onSubmit={handleSubmit}>
      <S.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt="pokemon.jpg"
      />

      <S.InputWrapper>
        <S.PokemonName
          theme={theme}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={
            value.name.substring(0, 1).toUpperCase() + value.name.substring(1)
          }
          id="name"
        />
        <S.NameIcon theme={theme} />
      </S.InputWrapper>

      <S.StatsRow>
        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              theme={theme}
              placeholder={value.height}
              value={values.height}
              onChange={handleChange}
              onBlur={handleBlur}
              id="height"
            />
            <S.GreyIcon fontSize="small" />
          </S.InputWrapper>
          <S.StatName theme={theme}>Height</S.StatName>
        </S.StatWrapper>

        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              theme={theme}
              placeholder={value.weight}
              value={values.weight}
              onChange={handleChange}
              onBlur={handleBlur}
              id="weight"
            />
            <S.GreyIcon fontSize="small" />
          </S.InputWrapper>
          <S.StatName theme={theme}>Weigth</S.StatName>
        </S.StatWrapper>
      </S.StatsRow>

      <S.StatsRow>
        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              theme={theme}
              placeholder={value.base_experience}
              value={values.experience}
              onChange={handleChange}
              onBlur={handleBlur}
              id="experience"
            />
            <S.GreyIcon fontSize="small" />
          </S.InputWrapper>
          <S.StatName theme={theme}> Experience</S.StatName>
        </S.StatWrapper>

        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              theme={theme}
              placeholder={value.abilities[0].ability.name}
              value={values.ability}
              onChange={handleChange}
              onBlur={handleBlur}
              id="ability"
            />
            <S.GreyIcon fontSize="small" />
          </S.InputWrapper>
          <S.StatName theme={theme}>Ability</S.StatName>
        </S.StatWrapper>
      </S.StatsRow>
      <S.ButtonWrapper>
        <S.StyledButton
          theme={theme}
          type="submit"
          onClick={() => {
            setChoice("edit");
          }}
        >
          save
        </S.StyledButton>
        <S.StyledButton
          theme={theme}
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
