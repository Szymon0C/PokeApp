import styled from "styled-components";

const PokeListWrapper = styled.div`
  display: flex;
  width: 100wv;
  flex-wrap: wrap;
  justify-content: center;
`;

const Message = styled.h2`
  color: ${(props) => {
    return props.theme.color;
  }};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export { PokeListWrapper, Message, Wrapper };
