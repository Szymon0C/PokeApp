import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  width: 100%;
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
  color: ${(props) => {
    return props.theme.color;
  }};

  background: none;
  font-size: 16px;
  border: none;
  width: 180px;
  height: 40px;

  &:hover {
    transform: scale(1.1);
    border: ${(props) => {
      return "1px solid" + props.theme.color2;
    }};
    color: ${(props) => {
      return props.theme.color2;
    }};
    border-radius: 5px;
  }

  @media only screen and (max-width: 600px) {
    width: 20vw;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
  color: ${(props) => {
    return props.theme.color;
  }};

  font-weight: 800;
`;

const LogMessage = styled.span`
  color: ${(props) => {
    return props.theme.color;
  }};
`;

export {
  NavWrapper,
  StyledLink,
  LogDiv,
  LogOutButton,
  AccountName,
  NavButton,
  Wrapper,
  LogMessage,
};
