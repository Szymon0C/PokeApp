import * as yup from "yup";

const passwordRules =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-,.]).{8,}$/;

export const registerSchema = yup.object().shape({
  name: yup.string().min(2).max(15).required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "The password must match: At least 8 characters, at least 1 uppercase letter, at least 1 special and 1 number",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .matches(passwordRules, { message: "Passwords must be the same!" })
    .oneOf([yup.ref("password"), null], "Passwords must be the same!")
    .required("Required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "The password must match: At least 8 characters, at least 1 uppercase letter,  at least 1 lowercase letter, and 1 number",
    })
    .required("Required"),
});

export const pokemonEditSchema = yup.object().shape({
  name: yup.string().min(1).max(20),
  ability: yup.string().min(1).max(20),
  height: yup.number().lessThan(10000),
  weight: yup.number().lessThan(10000),
  exerience: yup.number().lessThan(10000),
});
