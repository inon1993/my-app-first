import Card from "../UI/Card";
import DeleteBtn from "./DeleteBtn";

import classes from './Reminder.module.css';

const Reminder = (props) => {
  return (
    <Card className={classes['reminder-card']}>
      <div className={classes.reminder}>
        <h1 className={classes['reminder-title']}>{props.title}</h1>
      <p className={classes['reminder-body']}>{props.body}</p>
      </div>
      
      <div className={classes['del-area']}><DeleteBtn /></div>
    </Card>
  );
};

export default Reminder;
