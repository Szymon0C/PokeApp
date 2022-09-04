import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledButton = styled.button`
  border: none;
  background: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ButtonsWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;
export { StyledButton, StyledLink, ButtonsWrapper };
