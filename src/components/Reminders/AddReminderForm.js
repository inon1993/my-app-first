import react, { useRef, useEffect, useState } from "react";
import Card from "../UI/Card";

import classes from "./AddReminderForm.module.css";

const AddReminderForm = (props) => {
  const [date, setDate] = useState("");
  const [enteredDate, setEnteredDate] = useState(date);

  useEffect(() => {
    const current = new Date();
    let day = "";
    let month = "";
    if (current.getDate() < 10) {
      day = `0${current.getDate()}`;
    } else {
      day = current.getDate();
    }
    if (current.getMonth() + 1 < 10) {
      month = `0${current.getMonth() + 1}`;
    } else {
      month = current.getMonth + 1;
    }

    setDate(`${current.getFullYear()}-${month}-${day}`);
    console.log(date);
  }, [date]);

  const closeFormHandler = () => {
    props.onCloseForm();
  };

  const titleRef = useRef();
  const bodyRef = useRef();

  const addReminderHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    let reminderDate = "";
    if (enteredDate.trim().length === 0) {
      console.log(date);
      reminderDate = date;
    } else {
      reminderDate = enteredDate;
    }

    props.onAddReminder(title, body, reminderDate);

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <Card>
      <form
        className={classes["add-reminder-form"]}
        onSubmit={addReminderHandler}
      >
        <label className={classes.title}>Title:</label>
        <input
          className={classes["title-input"]}
          ref={titleRef}
          // maxLength="15"
        />
        <label className={classes.body}>Reminder Body:</label>
        <textarea
          className={classes["body-input"]}
          rows="10"
          cols="50"
          ref={bodyRef}
          // maxLength="50"
        />
        <label className={classes.date}>Pick a Date:</label>
        <input
          className={classes["date-input"]}
          type="date"
          defaultValue={date}
          min={date}
          onChange={changeDateHandler}
        />
        <div className={classes.buttons}>
          <button
            className={classes["add-button"]}
            // onClick={addReminderHandler}
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
