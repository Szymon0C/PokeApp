import { style } from "@mui/system";
import styled from "styled-components";

import Fab from "@mui/material/Fab";

const Container = styled.div`
  margin-top: 60px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  border: 1px solid #eb3458;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 50px;
  margin-top: 20px;
`;
const PokemonWrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 400px;
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
const PokeStatsColumn = styled.div``;
const PokeStatsRow = styled.div``;
const PokeHeading = styled.div`
  display: flex;
  align-items: center;
`;
const FavIcon = styled(Fab)`
  position: relative;
  left: 190px;
`;
export {
  Container,
  StyledButton,
  PokemonWrapper,
  Image,
  Pokemon,
  PokemonStats,
  PokeStatsColumn,
  PokeStatsRow,
  PokeHeading,
  FavIcon,
};
