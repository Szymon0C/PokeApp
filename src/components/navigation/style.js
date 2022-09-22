import styled from "styled-components";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${(props) => {
    return props.theme.backgroundColor;
  }};
`;
const NavWrapper = styled.div`
  padding: 10px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavButton = styled.button`
  background: none;
  font-size: 16px;
  border: none;
  width: 180px;
  height: 40px;
  &:hover {
    transform: scale(1.1);
    border: 1px solid #eb3458;
    color: #eb3458;
    border-radius: 5px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
const LogDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  font-size: 14px;
`;
const LogOutButton = styled.button`
  border: none;
  background: none;
  color: #eb3458;
`;
const AccountName = styled.span`
  font-weight: 700;
`;
const StyledSwitch = styled(Switch)`
  .Mui-disabled {
    .MuiSwitch-thumb {
      color: #fff;
    }
  }
  ,
  .Mui-checked {
    .MuiSwitch-thumb {
      color: #000;
    }
  }
`;

export {
  NavWrapper,
  StyledLink,
  LogDiv,
  LogOutButton,
  AccountName,
  NavButton,
  StyledSwitch,
  Wrapper,
};
