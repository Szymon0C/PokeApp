import { useContext } from "react";

import { Box } from "@mui/system";

import { ThemeContext } from "../../../../../../contexts/ThemeContext";
import * as S from "./style";

export default function Input(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <Box sx={{ width: "80vw" }}>
      <S.StyledInput
        theme={theme}
        fullWidth
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => {
          props.search(e.target.value);
        }}
      />
    </Box>
  );
}
