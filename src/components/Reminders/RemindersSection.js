import react, { useState } from "react";

import Card from "../UI/Card";
import AddReminderForm from "./AddReminderForm";
import Reminder from "./Reminder";

import classes from "./ReminderSection.module.css";

const ReminderSection = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [reminderList, setReminderList] = useState([]);

  const openFormHandler = () => {
    setIsClicked(true);
  };

  const closeFormHandler = () => {
    setIsClicked(false);
  };

  const addReminderToListHandler = (title, body) => {
    setReminderList((prevReminderList) => {
      return [...prevReminderList, { title: title, body: body }];
    });
    // console.log(reminderList);
  };

  return (
    <react.Fragment>
      {!isClicked && (
        <button
          className={classes["open-form-button"]}
          onClick={openFormHandler}
        >
          +
        </button>
      )}
      {isClicked && (
        <AddReminderForm
          onCloseForm={closeFormHandler}
          onAddReminder={addReminderToListHandler}
        />
      )}
      <div className={classes["list-section"]}>
        <ul className={classes.ul}>
          {reminderList.map((reminder) => {
            return <Reminder title={reminder.title} body={reminder.body} />;
          })}
        </ul>
      </div>
    </react.Fragment>
  );
};

export default ReminderSection;
