import { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [logged, setLogged] = useState(null);
  const addUser = (user) => {
    setUsers([...users, user]);
    setLogged(user);
  };
  const logIn = (checkUser) => {
    users.map((user) => {
      if (
        checkUser.email === user.email &&
        checkUser.password === user.password
      ) {
        setLogged(checkUser);
      }
    });
  };
  const logOut = () => {
    setLogged(null);
  };
  return (
    <UsersContext.Provider value={{ users, addUser, logged, logIn, logOut }}>
      {children}
    </UsersContext.Provider>
  );
};
