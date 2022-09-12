import { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [logged, setLogged] = useState(null);
  let repeat = false;
  const addUser = (newUser) => {
    // eslint-disable-next-line
    users.map((user) => {
      if (user.email === newUser.email) {
        repeat = true;
      }
    });
    if (!repeat) {
      setUsers([...users, newUser]);
      setLogged(newUser);
    }
    repeat = false;
  };

  const logIn = (checkUser) => {
    // eslint-disable-next-line
    users.map((user) => {
      if (
        checkUser.email === user.email &&
        checkUser.password === user.password
      ) {
        setLogged(user);
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
