import { useContext, useEffect, useState } from "react";

import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import { ThemeContext } from "../../../../../contexts/ThemeContext";
import { UsersContext } from "../../../../../contexts/UsersContext";
import { loginSchema } from "../../../../../schemas";
import * as S from "../style";

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();

  const [type, setType] = useState("password");
  const [clicked, setClicked] = useState(false);
  const { logIn, logged } = useContext(UsersContext);
  const { theme } = useContext(ThemeContext);

  const onSubmit = (values) => {
    logIn(values);
    setClicked(true);
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
    const checkLogin = () => {
      if (!logged && clicked) {
        enqueueSnackbar("Invalid Email/Password combination", {
          autoHideDuration: 3000,
          variant: "error",
        });
        setClicked(false);
      }
    };
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logged, clicked]);
  const showPassword = () => {
    setType(type === "password" ? "text" : "password");
  };
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
            type={type}
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Enter your password"
            onBlur={handleBlur}
            autoComplete="true"
          />
          <S.ShowPasswordWrapper>
            <input type="checkbox" onClick={showPassword} />
            <S.StyledLabel htmlFor="password" theme={theme}>
              Show password
            </S.StyledLabel>
          </S.ShowPasswordWrapper>

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
