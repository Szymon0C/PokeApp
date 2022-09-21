import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledButton = styled.div`
  border: none;
  background: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ButtonsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: end;
  width: 100vw;
  align-items: center;
  height: 50px;
  background-color: rgba(360, 360, 360, 0.4);
`;
const PageButtons = styled.button`
  background: none;
  border: 1px solid #eb3458;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eb3458;
  height: 30px;
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;
const StyledPage = styled.span`
  color: #eb3458;
`;
export { StyledButton, StyledLink, ButtonsWrapper, PageButtons, StyledPage };
