import { useRef, useState } from 'react';

import classes from './SignUpForm.module.css';

const SignUpForm = props => {

    const [isValidInput, setIsValidInput] = useState(false);

    const fnameRef = useRef();
    const lnameRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

    const newUserHandler = event => {
        event.preventDefault();
        const fname = fnameRef.current.value;
        const lname = lnameRef.current.value;
        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if(fname.trim().length < 1 || lname.trim().length < 1 || email.trim().length < 1 || username.trim().length < 1 || password.trim().length < 1){
            setIsValidInput(false);
            return(alert('Some fields are missing...'));
        };

        props.onSignUp(fname, lname, email, username, password);
    }

    const closeSignUpHandler =() => {
        props.onClose();
    }

    return (
        <form className={classes['sign-up-form']}>
            <label className={classes.fname}>First Name:</label>
            <input className={classes['fname-input']} type='text' ref={fnameRef} />
            <label className={classes.lname}>Last Name:</label>
            <input className={classes['lname-input']} type='text' ref={lnameRef} />
            <label className={classes.email}>E-Mail:</label>
            <input className={classes['email-input']} type='email' ref={emailRef} />
            <label className={classes.username}>User Name:</label>
            <input className={classes['un-input']} type='text' ref={usernameRef} />
            <label className={classes.password}>Password:</label>
            <input className={classes['pw-input']} type='text' ref={passwordRef} />
            <div className={classes.buttons}>
                <button className={classes['sign-up-button']} type="submit" onClick={newUserHandler}>Sign Up!</button>
                <button className={classes['close-button']} onClick={closeSignUpHandler}>Cancel</button>
            </div>
            
        </form>
    );
};

export default SignUpForm;