import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import * as S from "./style";

import Logo from "./components/logo/Logo";
import HomePage from "./components/homePage/HomePage";
import Favourite from "./components/fav/Favourite";

export default function Nav() {
  return (
    <S.NavWrapper>
      <BrowserRouter>
        <Link to={"/"}>
          <Logo />
        </Link>
        <Link to={"/favourtie"}>
          <button>Favourite</button>
        </Link>
        <Link to={"/arena"}>
          <button>Arena</button>
        </Link>
        <Link to={"/log-reg"}>
          <button>Login</button>
        </Link>
        <Link to={"/edit"}>
          <button>Edit</button>
        </Link>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourtie" element={<Favourite />} />
        </Routes>
      </BrowserRouter>
    </S.NavWrapper>
  );
}
