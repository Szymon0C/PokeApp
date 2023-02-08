import { useState, useEffect } from "react";
import axios from "axios";

import Input from "./components/input/Input";
import PokeData from "./components/pokeList/PokeData";
import * as S from "./style";

export default function HomePage(props) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <S.Wrapper>
      <Input
        search={(type) => {
          setSearch(type);
        }}
        result={search}
      />

      <PokeData result={search} />
    </S.Wrapper>
  );
}
