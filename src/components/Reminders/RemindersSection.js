import react, { useState, useEffect } from "react";
import axios from 'axios';

import Card from "../UI/Card";
import AddReminderForm from "./AddReminderForm";
import Reminder from "./Reminder";

import classes from "./ReminderSection.module.css";

const ReminderSection = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [reminderList, setReminderList] = useState([]);
  // const [state, setState] = useState({title: '', body: ''});

  useEffect(() => {
    getReminders();
  }, []);

  const getReminders = () => {
    axios.get('/api')
    .then((response) => {
      setReminderList(response.data.reverse());
      console.log('Data has been received.');
    })
    .catch(() => {
      console.log('Error retrieving data!');
    });
  }

  const openFormHandler = () => {
    setIsClicked(true);
  };

  const closeFormHandler = () => {
    setIsClicked(false);
  };

  const addReminderToListHandler = (title, body) => {
    // setState({
    //   title: title,
    //   body: body
    // });

    const payload = {
      title: title,
      body: body
    };

    // console.log('check: ', payload);

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server.');
      getReminders();
    })
    .catch(() => {
      console.log('Internal server error.');
    });

    // setReminderList((prevReminderList) => {
    //   return [...prevReminderList, { title: title, body: body }];
    // });
    
  };

  const deleteReminderFromList = (id) => {

    const reminderId = {
      id: id
    };
    console.log(reminderId);
    axios({
      url: '/api/delete',
      method: 'DELETE',
      data: reminderId
    })
    .then(() => {
      console.log('Data has been deleted successfully.');
      getReminders();
    })
    .catch(() => {
      console.log('Delete error.');
    });
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
            return <Reminder key={reminder._id} id={reminder._id} title={reminder.title} body={reminder.body} onDeleteReminder={deleteReminderFromList} />;
          })}
        </ul>
      </div>
    </react.Fragment>
  );
};

export default ReminderSection;
