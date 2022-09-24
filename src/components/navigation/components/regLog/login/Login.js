import { useContext, useEffect, useState } from "react";

import { UsersContext } from "../../../../../contexts/UsersContext";
import { ThemeContext } from "../../../../../contexts/ThemeContext";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";

import * as S from "../style";
import { loginSchema } from "../../../../../schemas";
import { useSnackbar } from "notistack";
export default function Login() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [clicked, setClicked] = useState(false);
  const { users, logIn, logged } = useContext(UsersContext);
  const { theme } = useContext(ThemeContext);

  const onSubmit = (values) => {
    logIn(values);
    setClicked(true);
    if (logged) {
      navigate("/edit");
    }
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });
  useEffect(() => {
    const showMessage = () => {
      if (!logged && clicked) {
        enqueueSnackbar("Invalid Email/Password combination", {
          autoHideDuration: 3000,
          variant: "error",
        });
        setClicked(false);
      }
    };
    showMessage();
  }, [logged, clicked]);

  return (
    <S.FormWrapper>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.StyledLabel theme={theme} htmlFor="email">
            email
          </S.StyledLabel>
          <S.StyledInput
            theme={theme}
            error={errors.email && touched.email ? true : false}
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <S.ErrorMessage>{errors.email}</S.ErrorMessage>
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.StyledLabel theme={theme} htmlFor="password">
            password
          </S.StyledLabel>
          <S.StyledInput
            theme={theme}
            error={errors.password && touched.password ? true : false}
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Enter your password"
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <S.ErrorMessage>{errors.password}</S.ErrorMessage>
          )}
        </S.InputWrapper>
        <S.StyledButton theme={theme} type="submit">
          Log in
        </S.StyledButton>

        <S.RegisterInfo theme={theme}>
          Don't have an account?
          <S.StyledLink theme={theme} to={"/register"}>
            Register here!
          </S.StyledLink>
        </S.RegisterInfo>
      </S.StyledForm>
    </S.FormWrapper>
  );
}
