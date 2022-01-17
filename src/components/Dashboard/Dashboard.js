import react from "react";

const Dashboard = (props) => {
  const user = props.username;

  return (
    <react.Fragment>
      <h1>Hello, {user}</h1>
    </react.Fragment>
  );
};

export default Dashboard;
