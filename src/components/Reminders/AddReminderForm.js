import react, { useRef } from "react";
import Card from "../UI/Card";

import classes from "./AddReminderForm.module.css";

const AddReminderForm = (props) => {
  const closeFormHandler = () => {
    props.onCloseForm();
  };

  const titleRef = useRef();
  const bodyRef = useRef();

  const addReminderHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    // console.log(title);
    props.onAddReminder(title, body);
  };

  return (
    <Card>
      <form className={classes["add-reminder-form"]}>
        <label className={classes.title}>Title</label>
        <input className={classes["title-input"]} ref={titleRef} />
        <label className={classes.body}>Reminder Body</label>
        <textarea
          className={classes["body-input"]}
          rows="10"
          cols="50"
          ref={bodyRef}
        />
        <div className={classes.buttons}>
          <button
            className={classes["add-button"]}
            onClick={addReminderHandler}
          >
            Add Reminder
          </button>
          <button
            className={classes["close-button"]}
            onClick={closeFormHandler}
          >
            Close
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddReminderForm;
