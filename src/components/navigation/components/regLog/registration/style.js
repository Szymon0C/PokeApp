import styled from "styled-components";

const styledInput = styled.input`
  border: ${(props) => {
    return props.error === true ? " 1px solid red" : "1px solid black";
  }};
`;
export { styledInput };
