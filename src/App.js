import react, { useContext, useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import AuthContext from "./store/auth-context";

import './App.css';

function App() {

  const ctx = useContext(AuthContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState("");

  const loginHandler = (username) => {
    // setIsLoggedIn(true);
    setUser(username);
  };

  const signUpHandler = () => {
    // setIsLoggedIn(true);
    setIsSignUp(true);
  }

  const closeSignUpHandler = () => {
    setIsSignUp(false);
    // setIsLoggedIn(false);
  }

  return (

    <div className="app-body">
      {!ctx.isLoggedIn && !isSignUp && <Login onLogin={loginHandler} onSignUp={signUpHandler} />}
      {isSignUp && <SignUp onClose={closeSignUpHandler}/>}
      {ctx.isLoggedIn && !isSignUp && <Dashboard username={user} />}
    </div>
  );
}

export default App;
