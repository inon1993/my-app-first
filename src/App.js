import react, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const loginHandler = (username) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  return (
    <div className="app-body">
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Dashboard username={user} />}
    </div>
  );
}

export default App;
