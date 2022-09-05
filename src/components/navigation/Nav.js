import { useContext } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import * as S from "./style";

import Logo from "./components/logo/Logo";
import HomePage from "./components/homePage/HomePage";
import Favourite from "./components/fav/Favourite";
import Arena from "./components/arena/Arena";
import RegLog from "./components/regLog/RegLog";

import FullPagePokemon from "./components/homePage/components/pokeList/components/fullPagePokemon/fullPagePokemon";

import { IndexContext } from "../../contexts/IndexContext";

export default function Nav() {
  const { index } = useContext(IndexContext);

  return (
    <S.NavWrapper>
      <BrowserRouter>
        <S.StyledLink to={"/"}>
          <Logo />
        </S.StyledLink>
        <Link to={"/favourtie"}>
          <button>Favourite</button>
        </Link>
        <Link to={"/arena"}>
          <button>Arena</button>
        </Link>
        <Link to={"/log-reg"}>
          <button>Register</button>
        </Link>
        <Link to={"/edit"}>
          <button>Edit</button>
        </Link>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourtie" element={<Favourite />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/log-reg" element={<RegLog />} />

          <Route
            path="/full-page"
            element={<FullPagePokemon index={index} />}
          />
        </Routes>
      </BrowserRouter>
    </S.NavWrapper>
  );
}
