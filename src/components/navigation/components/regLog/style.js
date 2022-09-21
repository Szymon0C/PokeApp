import { Link } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  border-radius: 5px;
  width: 40vw;
  height: 40px;
  margin: 10px 0 10px 0;
  border: ${(props) => {
    return props.error === true ? " 2px solid red" : "2px solid black";
  }};
  &:focus {
    outline: none;
  }
`;
const ErrorMessage = styled.span`
  color: red;
  font-size: 13px;
  width: 40vw;
`;
const StyledButton = styled.button`
  box-sizing: content-box;
  background: none;
  border: 2px solid black;
  border-radius: 5px;
  width: 39.5vw;
  height: 40px;
  margin-top: 20px;
  opacity: ${(props) => {
    return props.disabled === true ? 0.35 : 1;
  }};
  &:hover {
    border: 2px solid #eb3458;
    color: #eb3458;
  }
`;
const RegisterInfo = styled.span`
  margin-top: 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-left: 5px;
  &:hover {
    color: #eb3458;
  }
`;
export {
  StyledInput,
  StyledForm,
  FormWrapper,
  StyledButton,
  InputWrapper,
  ErrorMessage,
  RegisterInfo,
  StyledLink,
};
