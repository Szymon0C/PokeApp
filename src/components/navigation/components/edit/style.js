import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  ::placeholder {
    color: #808080;
    font-size: 14px;
  }
`;
const PokemonName = styled.input`
  border: none;
  height: 50px;
  width: 180px;
  text-align: center;
  color: #000;
  font-size: 32px;
  ::placeholder {
    color: #000;
  }
`;
export { StyledInput, PokemonName };
