import { useRef, useState, useReducer, useEffect } from 'react';

import classes from './SignUpForm.module.css';

const SignUpForm = props => {

    const [formIsValid, setFormIsValid] = useState(false);

    const [fnameState, dispachFname] = useReducer(fnameReducer, {value: '', isValid: null});
    const [lnameState, dispachLname] = useReducer(lnameReducer, {value: '', isValid: null});
    const [emailState, dispachEmail] = useReducer(EmailReducer, {value: '', isValid: null});
    const [usernameState, dispachUsername] = useReducer(usernameReducer, {value: '', isValid: null});
    const [passwordState, dispachPassword] = useReducer(passwordReducer, {value: '', isValid: null});

    const newUserHandler = event => {
        event.preventDefault();

        props.onSignUp(/*fname, lname, email, username, password*/);
    }

    const closeSignUpHandler = () => {
        props.onClose();
    }

    return (
        <form className={classes['sign-up-form']} onSubmit={newUserHandler}>
            <label className={classes.fname}>First Name:</label>
            <input className={classes['fname-input']} type='text' id="fname" value={fnameState.value} onChange={fnameChangeHandler} onBlur={validateFnameHandler} />
            <label className={classes.lname}>Last Name:</label>
            <input className={classes['lname-input']} type='text' id="lname" value={lnameState.value} onChange={lnameChangeHandler} onBlur={validateLnameHandler} />
            <label className={classes.email}>E-Mail:</label>
            <input className={classes['email-input']} type='email' id="email" value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
            <label className={classes.username}>User Name:</label>
            <input className={classes['un-input']} type='text' id="username" value={usernameState.value} onChange={usernameChangeHandler} onBlur={validateUsernameHandler} />
            <label className={classes.password}>Password:</label>
            <input className={classes['pw-input']} type='text' id="password" value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
            <div className={classes.buttons}>
                <button className={classes['sign-up-button']} type="submit">Sign Up!</button>
                <button className={classes['close-button']} onClick={closeSignUpHandler}>Cancel</button>
            </div>
            
        </form>
    );
};

export default SignUpForm;