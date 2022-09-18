import { useContext } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import * as S from "./style";

import Logo from "./components/logo/Logo";
import HomePage from "./components/homePage/HomePage";
import Favourite from "./components/fav/Favourite";
import Arena from "./components/arena/Arena";
import RegLog from "./components/regLog/RegLog";
import Edit from "./components/edit/Edit";

import FullPagePokemon from "./components/homePage/components/pokeList/components/fullPagePokemon/fullPagePokemon";
import Registration from "./components/regLog/registration/Registration";
import PokemonEdit from "./components/edit/PokemonEdit";

import { IndexContext } from "../../contexts/IndexContext";
import { UsersContext } from "../../contexts/UsersContext";

export default function Nav() {
  const { index } = useContext(IndexContext);
  const { logged, logOut } = useContext(UsersContext);
  const editComponents = () => {
    if (logged) {
      return (
        <>
          <Route path="/edit" element={<Edit />} />
          <Route path="/pokemon-edit" element={<PokemonEdit />} />
        </>
      );
    } else return <Route path="/log-reg" element={<RegLog />} />;
  };
  return (
    <BrowserRouter>
      <S.NavWrapper>
        <S.StyledLink to={"/"}>
          <Logo />
        </S.StyledLink>

        <div>
          <Link to={"/favourtie"}>
            <S.NavButton>Favourite</S.NavButton>
          </Link>
          <Link to={"/arena"}>
            <S.NavButton>Arena</S.NavButton>
          </Link>

          {!logged && (
            <Link to={"/log-reg"}>
              <S.NavButton>Login</S.NavButton>
            </Link>
          )}

          {logged && (
            <Link to={"/edit"}>
              <S.NavButton>Edit</S.NavButton>
            </Link>
          )}
        </div>

        {logged && (
          <S.LogDiv>
            <div>
              <span>Zalogowany:</span>
              <S.AccountName>{logged.name}</S.AccountName>
            </div>
            <S.LogOutButton onClick={logOut}>log out</S.LogOutButton>
          </S.LogDiv>
        )}
        {!logged && <div />}
      </S.NavWrapper>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourtie" element={<Favourite />} />
          <Route path="/arena" element={<Arena />} />

          {editComponents()}

          <Route
            path="/full-page"
            element={<FullPagePokemon index={index} />}
          />

          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
