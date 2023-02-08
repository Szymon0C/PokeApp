import { useContext, useEffect, useState } from "react";

import { Formik } from "formik";
import { useSnackbar } from "notistack";

import { ThemeContext } from "../../../../../contexts/ThemeContext";
import { UsersContext } from "../../../../../contexts/UsersContext";
import { loginSchema } from "../../../../../schemas";
import StyledField from "../StyledField";
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

  // const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues: {
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: loginSchema,
  //     onSubmit,
  //   });
  // useEffect(() => {
  //   const checkLogin = () => {
  //     if (!logged && clicked) {
  //       enqueueSnackbar("Invalid Email/Password combination", {
  //         autoHideDuration: 3000,
  //         variant: "error",
  //       });
  //       setClicked(false);
  //     }
  //   };
  //   checkLogin();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [logged, clicked]);
  const showPassword = () => {
    setType(type === "password" ? "text" : "password");
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      <S.FormWrapper>
        <S.StyledForm>
          <S.InputWrapper>
            <StyledField
              theme={theme}
              name="email"
              placeholder="Enter your email"
              label="email"
              type="email"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.ShowPasswordWrapper>
              <input type="checkbox" onClick={showPassword} />
              <S.StyledLabel htmlFor="password" theme={theme}>
                Show password
              </S.StyledLabel>
            </S.ShowPasswordWrapper>

            <StyledField
              theme={theme}
              name="password"
              placeholder="Enter your password"
              label="password"
              type={type}
            />
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
    </Formik>
  );
}
