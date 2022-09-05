import { useFormik } from "formik";
import { basicSchema } from "../../../../../schemas";

import * as S from "./style";

export default function Registration() {
  const onSubmit = () => {
    console.log(formik.values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">email</label>
        <S.styledInput
          error={formik.errors.email ? true : false}
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          placeholder="Enter your email"
          onBlur={formik.handleBlur}
        />

        <label htmlFor="password">password</label>
        <S.styledInput
          error={formik.errors.password ? true : false}
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          placeholder="Enter your password"
          onBlur={formik.handleBlur}
        />
        <label>confirm password</label>
        <S.styledInput
          error={formik.errors.confirmPassword ? true : false}
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          id="confirmPassword"
          placeholder="Confirm password"
          onBlur={formik.handleBlur}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
