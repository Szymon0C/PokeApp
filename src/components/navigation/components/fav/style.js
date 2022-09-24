import styled from "styled-components";

const FavWrapper = styled.div`
  display: flex;
  width: 100wv;
  flex-wrap: wrap;
  justify-content: center;
`;
const Message = styled.h1`
  color: ${(props) => {
    return props.theme.color;
  }};
`;
export { FavWrapper, Message };
