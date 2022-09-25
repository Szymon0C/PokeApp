import { useContext } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { IndexContext } from "../../contexts/IndexContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { UsersContext } from "../../contexts/UsersContext";
import Arena from "./components/arena/Arena";
import ArenaChoose from "./components/arena/component/ArenaChoose";
import Edit from "./components/edit/Edit";
import InfoTransfer from "./components/edit/InfoTransfer";
import Favourite from "./components/fav/Favourite";
import FullPagePokemon from "./components/homePage/components/pokeList/components/fullPagePokemon/fullPagePokemon";
import HomePage from "./components/homePage/HomePage";
import Logo from "./components/logo/Logo";
import Registration from "./components/regLog/registration/Registration";
import RegLog from "./components/regLog/RegLog";
import Switch from "./components/switch/Switch";
import * as S from "./style";

export default function Nav() {
  const { index } = useContext(IndexContext);
  const { logged, logOut } = useContext(UsersContext);
  const { theme } = useContext(ThemeContext);

  const editComponents = () => {
    if (logged) {
      return (
        <>
          <Route path="/edit" element={<Edit />} />
          <Route path="/pokemon-edit" element={<InfoTransfer />} />
        </>
      );
    } else return <Route path="/log-reg" element={<RegLog />} />;
  };

  return (
    <S.Wrapper theme={theme}>
      <BrowserRouter>
        <S.NavWrapper>
          <S.StyledLink to={"/"}>
            <Logo />
          </S.StyledLink>

          <div>
            <Link to={"/favourtie"}>
              <S.NavButton theme={theme}>Favourite</S.NavButton>
            </Link>
            <Link to={"/arena"}>
              <S.NavButton theme={theme}>Arena</S.NavButton>
            </Link>

            {!logged && (
              <Link to={"/log-reg"}>
                <S.NavButton theme={theme}>Login</S.NavButton>
              </Link>
            )}

            {logged && (
              <Link to={"/edit"}>
                <S.NavButton theme={theme}>Edit</S.NavButton>
              </Link>
            )}
          </div>
          <div>
            {logged && (
              <S.LogDiv>
                <div>
                  <S.LogMessage theme={theme}>Logged in as:</S.LogMessage>
                  <S.AccountName theme={theme}>{logged.name}</S.AccountName>
                </div>
                <S.LogOutButton onClick={logOut}>log out</S.LogOutButton>
              </S.LogDiv>
            )}

            {!logged && <div />}
            <Switch />
          </div>
        </S.NavWrapper>

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourtie" element={<Favourite />} />
            <Route path="/arena" element={<Arena />} />
            <Route path="/arena-choose" element={<ArenaChoose />} />
            {editComponents()}
            <Route
              path="/full-page"
              element={<FullPagePokemon index={index} />}
            />

            <Route path="/register" element={<Registration />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </S.Wrapper>
  );
}
