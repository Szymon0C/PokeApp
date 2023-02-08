import { useField } from "formik";

import * as S from "./style";

export default function StyledField({ theme, label, ...props }) {
  const [field, meta] = useField(props);

  const { error, touched } = meta;

  return (
    <>
      <S.StyledLabel theme={theme}>{label}</S.StyledLabel>
      <S.StyledInput
        theme={theme}
        error={error && touched ? true : false}
        {...props}
        {...field}
      />
      {error && touched && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </>
  );
}
