import { useContext, useState } from "react";

import { IndexContext } from "../../../../../contexts/IndexContext";
import { EditContext } from "../../../../../contexts/EditContext";

import EditIcon from "@mui/icons-material/Edit";

import { useFormik } from "formik";
import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { pokemonEditSchema } from "../../../../../schemas";
export default function PokemonEdit({ value }) {
  console.log(value);
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
      index: index,
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
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={
            value.name.substring(0, 1).toUpperCase() + value.name.substring(1)
          }
          id="name"
        />
        <EditIcon />
      </S.InputWrapper>

      <S.StatsRow>
        <S.StatWrapper>
          <S.InputWrapper>
            <S.StyledInput
              placeholder={value.height}
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
              placeholder={value.weight}
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
              placeholder={value.base_experience}
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
              placeholder={value.abilities[0].ability.name}
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
