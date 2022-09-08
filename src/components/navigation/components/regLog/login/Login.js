import { useContext } from "react";

import { UsersContext } from "../../../../../contexts/UsersContext";

import { Link } from "react-router-dom";

import { useFormik } from "formik";

export default function Login() {
  const { users } = useContext(UsersContext);
  const showUsers = () => {
    console.log(users);
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={showUsers}>show users</button>
      <Link to={"/register"}>Register</Link>
    </div>
  );
}
