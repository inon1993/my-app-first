import Card from "../UI/Card";

import classes from './Reminder.module.css';

const Reminder = (props) => {
  return (
    <Card className={classes.reminder}>
      <h1 className={classes['reminder-title']}>{props.title}</h1>
      <p className={classes['reminder-body']}>{props.body}</p>
    </Card>
  );
};

export default Reminder;
