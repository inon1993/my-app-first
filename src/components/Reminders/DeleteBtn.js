import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import classes from './DeleteBtn.module.css';


const DeleteBtn = props => {
    return (
        <button className={classes.delete} type="button"><FontAwesomeIcon size="2x" icon={faTrash} className={classes.icon} /></button>
    );
};

export default DeleteBtn;