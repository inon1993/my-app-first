import react, { useContext } from "react";
import ReminderSection from "../Reminders/RemindersSection";
import AuthContext from "../../store/auth-context";

import classes from "./Dashboard.module.css";
import LogoutBtn from "./LogoutBtn";

const Dashboard = (props) => {
  const ctx = useContext(AuthContext);

  const user = ctx.fname;

  return (
    <div className={classes["dashboard-wrapper"]}>
      <div className={classes.dashboard}>
        <nav className="nav">
          <LogoutBtn>Logout</LogoutBtn>
        </nav>
        <h1 className={classes["hello-user"]}>Hello, {user}</h1>
        <ReminderSection />
      </div>
    </div>
  );
};

export default Dashboard;
