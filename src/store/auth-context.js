import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext({
  fname: "",
  lname: "",
  email: "",
  username: "",
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    axios
      .get("/api/auth")
      .then((response) => {
        console.log(response.data);
        if (response.data.msg === "User is authenticated.") {
          console.log("user is auth!");
          loginHandler(response.data);
        } else {
          console.log("user is not auth!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loginHandler = (data) => {
    setUserData(data);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    axios
      .get("/api/logout")
      .then((response) => {
        if (response.data.msg === "Logout is successfull.") {
          setIsLoggedIn(false);
        } else {
          console.log("logout is not successfull.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        username: userData.username,
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
