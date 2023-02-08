import styled from "styled-components";

import { Link } from "react-router-dom";
import { Field, Form } from "formik";

const FormWrapper = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
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
  background: none;
  border-radius: 5px;
  width: 40vw;
  height: 40px;
  margin: 10px 0 10px 0;

  color: ${(props) => {
    return props.theme.color2;
  }};

  border: ${(props) => {
    return props.error === true
      ? " 2px solid red"
      : "2px solid" + props.theme.color;
  }};

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    width: 80vw;
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
  border-radius: 5px;
  width: 39.5vw;
  height: 40px;
  margin-top: 20px;

  border: ${(props) => {
    return "2px solid" + props.theme.color;
  }};

  color: ${(props) => {
    return props.theme.color;
  }};

  opacity: ${(props) => {
    return props.disabled === true ? 0.35 : 1;
  }};

  &:hover {
    border: ${(props) => {
      return "2px solid" + props.theme.color2;
    }};

    color: ${(props) => {
      return props.theme.color2;
    }};
  }

  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
`;

const RegisterInfo = styled.span`
  margin-top: 20px;

  color: ${(props) => {
    return props.theme.color;
  }};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 5px;

  color: ${(props) => {
    return props.theme.color;
  }};

  &:hover {
    color: ${(props) => {
      return props.theme.color2;
    }};
  }
`;

const StyledLabel = styled.label`
  color: ${(props) => {
    return props.theme.color;
  }};
`;

const ShowPasswordWrapper = styled.div`
  display: flex;
  align-items: center;
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
  StyledLabel,
  ShowPasswordWrapper,
};
