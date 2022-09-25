import styled from "styled-components";

import { TextField } from "@mui/material";

const StyledInput = styled(TextField)`
  & label.MuiFormLabel-root {
    color: ${(props) => {
      return props.theme.color;
    }};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${(props) => {
      return props.theme.color;
    }};
  }
  & .MuiOutlinedInput-root {
    color: ${(props) => {
      return props.theme.color2;
    }};

    & fieldset {
      border-color: ${(props) => {
        return props.theme.color;
      }};
    }
    &:hover fieldset {
      border-color: ${(props) => {
        return props.theme.color;
      }};
    }
    &.Mui-focused fieldset {
      border-color: ${(props) => {
        return props.theme.color;
      }};
    }
  }
`;

export { StyledInput };
