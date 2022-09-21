import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import * as S from "../style";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

export default function Switch() {
  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {theme.name === "light" && <Typography>light</Typography>}
      <S.StyledSwitch onChange={changeTheme} />
      {theme.name === "dark" && <Typography>dark</Typography>}
    </Stack>
  );
}
