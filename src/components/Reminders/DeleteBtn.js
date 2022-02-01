import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import classes from './DeleteBtn.module.css';


const DeleteBtn = props => {

    const deleteReminderHandler = () => {
        props.onDelete();
    }

    return (
        <button className={classes.delete} type="button" onClick={deleteReminderHandler}><FontAwesomeIcon size="2x" icon={faTrash} className={classes.icon} /></button>
    );
};

export default DeleteBtn;