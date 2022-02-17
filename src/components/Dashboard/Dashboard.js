import react, { useContext, useEffect, useState } from "react";
import ReminderSection from "../Reminders/RemindersSection";
import AuthContext from "../../store/auth-context";

import classes from "./Dashboard.module.css";
import LogoutBtn from "./LogoutBtn";

const Dashboard = (props) => {
  const ctx = useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState("");
  const [titleColor, setTitleColor] = useState("");

  useEffect(() => {
    const time = new Date().getHours();
    if (time > 17 || time < 6) {
      setImgUrl("/img/night.jpg");
      setTitleColor("white");
    } else {
      setImgUrl("/img/day.jpg");
      setTitleColor("black");
    }
  });

  const user = ctx.fname;

  return (
    <div
      className={classes.dashboard}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <nav className="nav">
        <LogoutBtn>Logout</LogoutBtn>
      </nav>
      <h1 className={classes["hello-user"]} style={{ color: titleColor }}>
        Hello, {user}
      </h1>
      <ReminderSection />
    </div>
  );
};

export default Dashboard;
