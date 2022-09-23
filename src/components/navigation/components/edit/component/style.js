import styled from "styled-components";

import EditIcon from "@mui/icons-material/Edit";

const StyledInput = styled.input`
  height: 20px;
  border: none;
  text-align: center;
  ::placeholder {
    color: #808080;
    font-size: 14px;
  }
`;
const PokemonName = styled.input`
  border: none;
  height: 50px;
  width: 300px;
  text-align: center;
  color: #000;
  font-size: 32px;
  ::placeholder {
    color: #000;
  }
`;
const Image = styled.img`
  width: 270px;
  height: 270px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StatsRow = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const GreyIcon = styled(EditIcon)`
  color: #808080;
  position: relative;
  right: 20px;
`;
const StyledButton = styled.button`
  width: 160px;
  height: 50px;
  background: none;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #000;
  &:hover {
    transform: scale(1.1);
    border: 1px solid #eb3458;
    color: #eb3458;
  }
`;
const ButtonWrapper = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
`;
export {
  StyledInput,
  PokemonName,
  Image,
  InputWrapper,
  StatWrapper,
  StatsRow,
  StyledForm,
  GreyIcon,
  StyledButton,
  ButtonWrapper,
};
