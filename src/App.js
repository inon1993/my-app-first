import react, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const loginHandler = (username) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  return (
    <react.Fragment>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Dashboard username={user} />}
    </react.Fragment>
  );
}

export default App;
