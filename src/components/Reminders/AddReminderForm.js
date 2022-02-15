import react, { useRef, useEffect, useState } from "react";
import Card from "../UI/Card";

import classes from "./AddReminderForm.module.css";

const AddReminderForm = (props) => {
  const [date, setDate] = useState("");
  const [enteredDate, setEnteredDate] = useState(date);
  const [time, setTime] = useState("");
  const [enteredTime, setEnteredTime] = useState(time);

  useEffect(() => {
    const current = new Date();
    let day = "";
    let month = "";
    let hours = "";
    let minutes = "";
    // let seconds = "";
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

    if (current.getHours() < 10) {
      hours = `0${current.getHours()}`;
    } else {
      hours = current.getHours();
    }
    if (current.getMinutes() < 10) {
      minutes = `0${current.getMinutes()}`;
    } else {
      minutes = current.getMinutes();
    }
    // if (current.getSeconds() < 10) {
    //   seconds = `0${current.getSeconds()}`;
    // } else {
    //   seconds = current.getSeconds();
    // }
    // const dt = new Date(
    //   Date.UTC(
    //     current.getFullYear(),
    //     current.getMonth(),
    //     current.getDate(),
    //     current.getHours(),
    //     current.getMinutes(),
    //     current.getSeconds()
    //   )
    // );
    // const opt = {
    //   weekday: "short",
    //   year: "numeric",
    //   month: "short",
    //   day: "numeric",
    // };
    // console.log(dt.toLocaleDateString("en-US", opt));
    setTime(hours + ":" + minutes /*+ ":" + seconds*/);

    console.log(time);

    setDate(`${current.getFullYear()}-${month}-${day}`);
    console.log(date);
  }, [date, time]);

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

    let reminderTime = "";
    if (enteredTime.trim().length === 0) {
      console.log(time);
      reminderTime = time;
    } else {
      reminderTime = enteredTime;
    }

    props.onAddReminder(title, body, reminderDate, reminderTime);

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const changeTimeHandler = (event) => {
    setEnteredTime(event.target.value);
    console.log(enteredTime);
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
        <label className={classes.date}>Pick a Date and Time:</label>
        <div className={classes["date-time-inputs"]}>
          <input
            className={classes["date-input"]}
            type="date"
            defaultValue={date}
            min={date}
            onChange={changeDateHandler}
          />
          <input
            className={classes["time-input"]}
            type="time"
            id="appt"
            name="appt"
            defaultValue={time}
            min={time}
            required
            onChange={changeTimeHandler}
          />
        </div>
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
