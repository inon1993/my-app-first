import react from "react";
import ReminderSection from "../Reminders/RemindersSection";

import classes from "./Dashboard.module.css";

const Dashboard = (props) => {
  const user = props.username;

  return (
    <div className={classes.dashboard}>
      <h1 className={classes["hello-user"]}>Hello, {user}</h1>
      <ReminderSection />
    </div>
  );
};

export default Dashboard;
