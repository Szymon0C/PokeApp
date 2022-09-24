import { useState, useContext } from "react";
import PokeData from "../homePage/components/pokeList/PokeData";
import Input from "../homePage/components/input/Input";
import * as S from "./style";
import { ThemeContext } from "../../../../contexts/ThemeContext";

export default function Edit() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <S.Wrapper>
        <S.Message theme={theme}>Choose Pokemon to edit</S.Message>
      </S.Wrapper>
      <S.PokeListWrapper>
        <Input
          search={(type) => {
            setSearch(type);
          }}
          result={search}
        />

        <PokeData result={search} />
      </S.PokeListWrapper>
    </>
  );
}
