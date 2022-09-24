import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  width: 100wv;
  flex-wrap: wrap;
  justify-content: center;
`;
const ButtonsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: end;
  width: 100vw;
  align-items: center;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.4);
`;
const PageButtons = styled.button`
  background: none;
  border: ${(props) => {
    return "1px solid" + props.theme.color2;
  }};
  color: ${(props) => {
    return props.theme.color2;
  }};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;
const StyledPage = styled.span`
  color: ${(props) => {
    return props.theme.color2;
  }};
`;
const StyledButton = styled.div`
  border: none;
  background: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
export {
  Wrapper,
  ButtonsWrapper,
  PageButtons,
  StyledPage,
  StyledButton,
  StyledLink,
};
