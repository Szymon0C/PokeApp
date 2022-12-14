import styled from "styled-components";

import EditIcon from "@mui/icons-material/Edit";

const StyledInput = styled.input`
  height: 20px;
  border: none;
  color: #808080;
  text-align: center;

  background: ${(props) => {
    return props.theme.backgroundColor;
  }};

  ::placeholder {
    font-size: 14px;
  }
`;

const PokemonName = styled.input`
  border: none;
  height: 50px;
  width: 300px;
  text-align: center;
  font-size: 32px;

  background: ${(props) => {
    return props.theme.backgroundColor;
  }};

  color: ${(props) => {
    return props.theme.color;
  }};
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

const NameIcon = styled(EditIcon)`
  color: ${(props) => {
    return props.theme.color;
  }};
`;

const StyledButton = styled.button`
  width: 160px;
  height: 50px;
  background: none;
  font-size: 16px;
  border-radius: 5px;

  border: ${(props) => {
    return "2px solid" + props.theme.color;
  }};

  color: ${(props) => {
    return props.theme.color;
  }};

  &:hover {
    transform: scale(1.1);

    border: ${(props) => {
      return "2px solid" + props.theme.color2;
    }};

    color: ${(props) => {
      return props.theme.color2;
    }};
  }
`;

const ButtonWrapper = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
`;

const StatName = styled.span`
  color: ${(props) => {
    return props.theme.color;
  }};
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
  NameIcon,
  StyledButton,
  ButtonWrapper,
  StatName,
};
