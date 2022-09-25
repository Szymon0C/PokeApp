import styled from "styled-components";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Switch } from "@mui/material";

const Wrapper = styled.div`
  position: fixed;
  top: 45px;
  right: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media only screen and (max-width: 600px) {
    top: 75px;
    right: 5px;
  }
`;

const LightIcon = styled(LightModeIcon)`
  color: #eb3458;
`;

const DarkIcon = styled(DarkModeIcon)`
  color: #bb86fc;
`;

const StyledSwitch = styled(Switch)`
  .Mui-disabled {
    .MuiSwitch-thumb {
    }
  }
  ,
  .Mui-checked {
    .MuiSwitch-thumb {
      color: ${(props) => {
        return props.mytheme.color2;
      }};
    }
  }
`;

export { Wrapper, StyledSwitch, LightIcon, DarkIcon };
