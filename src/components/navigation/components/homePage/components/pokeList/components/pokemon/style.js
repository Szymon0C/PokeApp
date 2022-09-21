import styled from "styled-components";
import { Fab } from "@mui/material";

const Image = styled.img`
  width: 270px;
  height: 270px;
`;

const PokemonCard = styled.div`
  width: 350px;
  height: 440px;
  border: ${(props) => {
    return "2px solid" + props.theme.color;
  }};
    margin 15px 15px 15px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
  font-family: "M PLUS Rounded 1c", sans-serif;

  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

  &:hover {
    transform: scale(1.1);
  }

`;

const PokemonStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StatsWrapperColumn = styled.div`
  width: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StatsWrapper = styled.div`
  display: flex;
`;
const StatName = styled.span`
  color: ${(props) => {
    return props.theme.color;
  }};
  margin-bottom: 10px;
`;
const StatValue = styled.span`
  color: ${(props) => {
    return props.theme.color2;
  }};
  font-size: 14px;
`;
const PokemonName = styled.h2`
  color: #000;
  margin-bottom: 20px;
`;
const Icon = styled(Fab)`
  left: 280px;
  top: 10px;
`;

export {
  PokemonCard,
  Image,
  PokemonStatWrapper,
  StatsWrapperColumn,
  StatsWrapper,
  StatName,
  StatValue,
  PokemonName,
  Icon,
};
