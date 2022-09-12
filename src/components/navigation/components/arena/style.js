import styled from "styled-components";

const ArenaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const PokemonsWrapper = styled.div`
  width: 100vw;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-evenly;
  animation: shake 0.75s;
  animation-iteration-count: infinite;
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;
const ClearButton = styled.button`
  width: 180px;
  height: 70px;
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
const StyledButton = styled.button`
  width: 180px;
  height: 70px;
  position: relative;
  bottom: 430px;
  font-size: 16px;
  background: none;
  border-radius: 5px;
  border: 1px solid #000;
  &:hover {
    transform: scale(1.1);
    position: relative;
    bottom: 430px;
    border: 1px solid #eb3458;
    color: #eb3458;
  }
`;

export { ArenaWrapper, PokemonsWrapper, StyledButton, ClearButton };
