import Card from "../UI/Card";

const Reminder = (props) => {
  return (
    <Card>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </Card>
  );
};

export default Reminder;
