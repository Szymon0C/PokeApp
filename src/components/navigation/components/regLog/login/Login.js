import { useContext, useState } from "react";

import { UsersContext } from "../../../../../contexts/UsersContext";

import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";

import * as S from "../style";
import { loginSchema } from "../../../../../schemas";

export default function Login() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const { users, logIn, logged } = useContext(UsersContext);
  const showLogged = () => {
    console.log(logged);
  };
  const onSubmit = (values) => {
    logIn(values);
    setClicked(true);
    console.log(logged);
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

  const showUsers = () => {
    console.log(users);
  };

  return (
    <S.FormWrapper>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.InputWrapper>
          <label htmlFor="email">email</label>
          <S.StyledInput
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
          <label htmlFor="password">password</label>
          <S.StyledInput
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
        <S.StyledButton type="submit">Log in</S.StyledButton>
        {!logged && clicked && (
          <S.ErrorMessage>Invalid Email/Password combination</S.ErrorMessage>
        )}

        <S.RegisterInfo>
          Don't have an account?
          <S.StyledLink to={"/register"}>Register here!</S.StyledLink>
        </S.RegisterInfo>
      </S.StyledForm>

      {/* <h2>Login</h2>
      <button onClick={showUsers}>show users</button>
      <button onClick={showLogged}>show logged</button> */}
    </S.FormWrapper>
  );
}
