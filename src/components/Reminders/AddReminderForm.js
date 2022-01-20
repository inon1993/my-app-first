import Card from "../UI/Card";

const AddReminderForm = props => {

    const closeFormHandler = () => {
        props.onCloseForm();
    }

    return(
        <Card>
            <form>
            <label>Title</label>
            <input />
            <label> Reminder Body</label>
            <textarea rows="10" cols="50" />
            <button>Add Reminder</button>
            <button onClick={closeFormHandler}>Close</button>
        </form>
        </Card>
    )
}

export default AddReminderForm;