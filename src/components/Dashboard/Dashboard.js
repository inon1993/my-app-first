import react from "react";
import ReminderSection from "../Reminders/RemindersSection";

const Dashboard = (props) => {
  const user = props.username;

  return (
    <react.Fragment>
      <h1>Hello, {user}</h1>
      <ReminderSection />
    </react.Fragment>
  );
};

export default Dashboard;
