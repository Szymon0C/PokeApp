import { useContext } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../../../../schemas";

import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../../../../contexts/UsersContext";
import * as S from "../style";

export default function Registration() {
  const navigate = useNavigate();
  const { addUser } = useContext(UsersContext);

  const onSubmit = (values) => {
    addUser(values);
    navigate("/edit");
  };

  const {
    errors,
    values,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <>
      <S.FormWrapper>
        <S.StyledForm onSubmit={handleSubmit}>
          <S.InputWrapper>
            <label htmlFor="name">name</label>
            <S.StyledInput
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
          <S.InputWrapper>
            <label>confirm password</label>
            <S.StyledInput
              error={
                errors.confirmPassword && touched.confirmPassword ? true : false
              }
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              placeholder="Confirm password"
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <S.ErrorMessage>{errors.confirmPassword}</S.ErrorMessage>
            )}
          </S.InputWrapper>

          <S.StyledButton disabled={isSubmitting} type="submit">
            submit
          </S.StyledButton>
        </S.StyledForm>
      </S.FormWrapper>
    </>
  );
}
