import react, {useState} from 'react';

import Card from '../UI/Card';
import AddReminderForm from './AddReminderForm';

const ReminderSection = props => {

    const [isClicked, setIsClicked] = useState(false);
    
    const openFormHandler = () => {
        setIsClicked(true);
    }

    const closeFormHandler =() => {
        setIsClicked(false);
    }

    return(
        <react.Fragment>
            {!isClicked && <button onClick={openFormHandler}>Add Reminder</button>}
            {isClicked && <AddReminderForm onCloseForm={closeFormHandler} />}
        </react.Fragment>
        
    )
}

export default ReminderSection;