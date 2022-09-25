import { useContext, useState } from "react";

import { ThemeContext } from "../../../../contexts/ThemeContext";
import Input from "../homePage/components/input/Input";
import PokeData from "../homePage/components/pokeList/PokeData";
import * as S from "./style";

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
