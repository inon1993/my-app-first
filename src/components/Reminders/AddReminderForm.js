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

    props.onAddReminder(title, body);

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <Card>
      <form className={classes["add-reminder-form"]}>
        <label className={classes.title}>Title</label>
        <input
          className={classes["title-input"]}
          ref={titleRef}
          // maxLength="15"
        />
        <label className={classes.body}>Reminder Body</label>
        <textarea
          className={classes["body-input"]}
          rows="10"
          cols="50"
          ref={bodyRef}
          // maxLength="50"
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
