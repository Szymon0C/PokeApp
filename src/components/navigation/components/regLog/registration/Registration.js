import { useContext, useEffect, useState } from "react";

import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import { ThemeContext } from "../../../../../contexts/ThemeContext";
import { UsersContext } from "../../../../../contexts/UsersContext";
import { registerSchema } from "../../../../../schemas";
import * as S from "../style";

export default function Registration() {
  const { enqueueSnackbar } = useSnackbar();

  const [clicked, setClicked] = useState(false);
  const { addUser, logged } = useContext(UsersContext);
  const { theme } = useContext(ThemeContext);

  const onSubmit = (values) => {
    addUser(values);
    setClicked(true);
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });
  useEffect(() => {
    const checkLogin = () => {
      if (!logged && clicked) {
        enqueueSnackbar("Email is already registered", {
          autoHideDuration: 3000,
          variant: "error",
        });
        setClicked(false);
      }
    };
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logged, clicked]);

  return (
    <>
      <S.FormWrapper>
        <S.StyledForm onSubmit={handleSubmit}>
          <S.InputWrapper>
            <S.StyledLabel theme={theme} htmlFor="name">
              name
            </S.StyledLabel>
            <S.StyledInput
              theme={theme}
              error={errors.name && touched.name ? true : false}
              type="text"
              value={values.name}
              onChange={handleChange}
              id="name"
              placeholder="Enter your name"
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <S.ErrorMessage>{errors.name}</S.ErrorMessage>
            )}
          </S.InputWrapper>
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
              autoComplete="true"
            />
            {errors.password && touched.password && (
              <S.ErrorMessage>{errors.password}</S.ErrorMessage>
            )}
          </S.InputWrapper>
          <S.InputWrapper>
            <S.StyledLabel theme={theme}>confirm password</S.StyledLabel>
            <S.StyledInput
              theme={theme}
              error={
                errors.confirmPassword && touched.confirmPassword ? true : false
              }
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              placeholder="Confirm password"
              onBlur={handleBlur}
              autoComplete="true"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <S.ErrorMessage>{errors.confirmPassword}</S.ErrorMessage>
            )}
          </S.InputWrapper>

          <S.StyledButton theme={theme} type="submit">
            submit
          </S.StyledButton>
        </S.StyledForm>
      </S.FormWrapper>
    </>
  );
}
