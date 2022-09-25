import styled from "styled-components";

const ArenaWrapper = styled.div`
  padding-top: 25px;
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

  border: ${(props) => {
    return "1px solid" + props.theme.color;
  }};

  color: ${(props) => {
    return props.theme.color;
  }};

  &:hover {
    transform: scale(1.1);

    border: ${(props) => {
      return "1px solid" + props.theme.color2;
    }};

    color: ${(props) => {
      return props.theme.color2;
    }};
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    top: 430px;
    width: 80vw;
  }
`;

const StyledButton = styled.button`
  width: 180px;
  height: 70px;
  font-size: 16px;
  background: none;
  border-radius: 5px;
  margin-bottom: 60px;

  border: ${(props) => {
    return "1px solid" + props.theme.color;
  }};

  color: ${(props) => {
    return props.theme.color;
  }};

  &:hover {
    transform: scale(1.1);
    bottom: 430px;

    border: ${(props) => {
      return "1px solid" + props.theme.color2;
    }};

    color: ${(props) => {
      return props.theme.color2;
    }};
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    top: 430px;
    width: 80vw;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  bottom: 430px;
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.div`
  width: 350px;
  height: 440px;
  border-radius: 10px;

  border: ${(props) => {
    return "2px solid" + props.theme.color;
  }};
  margin 15px 15px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    width: 40vw;
    height: 220px;
    margin 5px 5px 5px 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => {
    return props.theme.color;
  }};
`;

const Message = styled.h1`
  color: ${(props) => {
    return props.theme.color;
  }};
`;

const WinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
`;
export {
  ArenaWrapper,
  PokemonsWrapper,
  StyledButton,
  ClearButton,
  ButtonWrapper,
  Placeholder,
  Wrapper,
  Message,
  WinnerWrapper,
};
