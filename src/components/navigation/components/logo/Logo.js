import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import * as S from "./style";
export default function Logo() {
  return (
    <S.LogoWrapper>
      <p>Pokedex</p>
      <CatchingPokemonIcon fontSize="large" />
    </S.LogoWrapper>
  );
}
