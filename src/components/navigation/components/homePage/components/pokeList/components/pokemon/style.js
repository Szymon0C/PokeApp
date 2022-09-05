import styled from "styled-components";

const Image = styled.img`
  width: 270px;
  height: 270px;
`;

const PokemonCard = styled.div`
  width: 350px;
  height: 440px;
  background-color: #d3d3d3;
  margin 15px 15px 15px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
  font-family: "M PLUS Rounded 1c", sans-serif;
  &:hover{
    transform: scale(1.1);
  };
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
  color: #000;
  margin-bottom: 10px;
`;
const StatValue = styled.span`
  color: #808080;
  font-size: 14px;
`;
const PokemonName = styled.h2`
  color: #000;
  margin-bottom: 20px;
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
};
