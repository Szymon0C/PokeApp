import styled from "styled-components";

import Fab from "@mui/material/Fab";

import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 60px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  border: ${(props) => {
    return "1px solid" + props.theme.color2;
  }};
  border-radius: 5px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 50px;
  margin-top: 20px;
  color: ${(props) => {
    return props.theme.color2;
  }};
`;
const PokemonWrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 440px;
  height: 440px;
`;
const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
`;
const PokemonStats = styled.div`
  display: flex;
`;
const PokemonName = styled.h1`
  color: ${(props) => {
    return props.theme.color;
  }};
`;
const PokeStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const PokeStatsColumn = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PokeHeading = styled.div`
  display: flex;
  align-items: center;
`;
const FavIcon = styled(Fab)`
  position: relative;
  left: 190px;
`;
const ArenaIcon = styled(Fab)`
  position: relative;
  left: 210px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StatValue = styled.span`
  color: #808080;
  font-size: 14px;
`;
const StatName = styled.span`
  color: ${(props) => {
    return props.theme.color;
  }};
`;
const FightIcon = styled.img`
  width: 18px;
  height: 18px;

  -webkit-filter: invert(100%); /* Safari 6.0 - 9.0 */
  filter: ${(props) => {
    return props.color === "default" ? "invert(0%)" : "invert(100%)";
  }};
`;
export {
  Container,
  StyledButton,
  PokemonWrapper,
  Image,
  Pokemon,
  PokemonName,
  PokemonStats,
  PokeStatsColumn,
  PokeStatsWrapper,
  PokeHeading,
  FavIcon,
  StyledLink,
  StatValue,
  StatName,
  FightIcon,
  ArenaIcon,
};
