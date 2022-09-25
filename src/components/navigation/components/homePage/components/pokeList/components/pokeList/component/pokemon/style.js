import styled from "styled-components";

import { Fab } from "@mui/material";

const Image = styled.img`
  width: 270px;
  height: 270px;

  @media only screen and (max-width: 600px) {
    width: 135px;
    height: 135px;
  }
`;

const PokemonCard = styled.div`
  width: 350px;
  height: 440px;
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
  
 border: ${(props) => {
   return "2px solid" + props.theme.color;
 }};

  &:hover {
    transform: scale(1.1);
  }

@media only screen and (max-width: 600px) {
    width: 40vw;
    height: 220px;
    margin 5px 5px 5px 5px;
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

  @media only screen and (max-width: 600px) {
    width: 20vw;
  }
`;

const StatsWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    position: relative;
    bottom: 20px;
  }
`;

const StatName = styled.span`
  margin-bottom: 10px;

  color: ${(props) => {
    return props.theme.color;
  }};

  @media only screen and (max-width: 600px) {
    margin-bottom: 0;
    font-size: 10px;
  }
`;

const StatValue = styled.span`
  font-size: 14px;

  color: ${(props) => {
    return props.theme.color2;
  }};

  @media only screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

const PokemonName = styled.h2`
  margin-bottom: 20px;

  color: ${(props) => {
    return props.theme.color;
  }};

  @media only screen and (max-width: 600px) {
    margin-bottom: 0;
    position: relative;
    bottom: 30px;
  }
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
