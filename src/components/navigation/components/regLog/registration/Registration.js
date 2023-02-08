import { useContext } from "react";

import { Formik } from "formik";
import { useSnackbar } from "notistack";

import { ThemeContext } from "../../../../../contexts/ThemeContext";

import { registerSchema } from "../../../../../schemas";
import * as S from "../style";
import { registerUser } from "../regLogActions";
import StyledField from "../StyledField";

export default function Registration() {
  const { enqueueSnackbar } = useSnackbar();

  const { theme } = useContext(ThemeContext);

  const onSubmit = (values, actions) => {
    delete values.confirmPassword;
    const body = { ...values, favourite: [] };

    registerUser(body);
    enqueueSnackbar("You have been registered succesfully", {
      autoHideDuration: 3000,
      variant: "success",
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <S.FormWrapper>
          <S.StyledForm>
            <S.InputWrapper>
              <StyledField
                theme={theme}
                name="name"
                placeholder="Enter your name"
                label="name"
                type="text"
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <StyledField
                theme={theme}
                name="email"
                placeholder="Enter your email"
                label="email"
                type="text"
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <StyledField
                theme={theme}
                name="password"
                placeholder="Enter your password"
                label="password"
                type="password"
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <StyledField
                theme={theme}
                name="confirmPassword"
                placeholder="Confirm password"
                label="confirm password"
                type="password"
              />
            </S.InputWrapper>

            <S.StyledButton theme={theme} type="submit">
              submit
            </S.StyledButton>
          </S.StyledForm>
        </S.FormWrapper>
      )}
    </Formik>
  );
}
