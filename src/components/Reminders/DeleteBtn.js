import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import classes from "./DeleteBtn.module.css";

const DeleteBtn = (props) => {
  const deleteReminderHandler = () => {
    props.onDelete();
  };

  return (
    <button
      className={classes.delete}
      type="button"
      onClick={deleteReminderHandler}
    >
      <FontAwesomeIcon size="2x" icon={faTrashAlt} className={classes.icon} />
    </button>
  );
};

export default DeleteBtn;
