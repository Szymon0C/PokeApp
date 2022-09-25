import { useContext } from "react";

import { ThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";

export default function Switch() {
  const { changeTheme, theme } = useContext(ThemeContext);

  return (
    <S.Wrapper theme={theme}>
      {theme.name === "light" && <S.LightIcon />}
      <S.StyledSwitch
        checked={theme.name === "dark" ? true : false}
        onChange={changeTheme}
        mytheme={theme}
      />
      {theme.name === "dark" && <S.DarkIcon />}
    </S.Wrapper>
  );
}
