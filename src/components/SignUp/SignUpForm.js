import { useRef, useState, useReducer } from 'react';

import classes from './SignUpForm.module.css';

// const formReducer = (state, action) => {
//     if(action.type === 'FNAME') {
//         return {value: action.val, fname_isValid: action.val.trim().length > 1, lname_isValid: state.lname_isValid, email_isValid: state.email_isValid, username_isValid: state.username_isValid, password_isValid: state.password_isValid}
//     }
//     if(action.type === 'LNAME') {
//         return {value: action.val, fname_isValid: state.fname_isValid, lname_isValid: action.val.trim().length > 1, email_isValid: state.email_isValid, username_isValid: state.username_isValid, password_isValid: state.password_isValid}
//     }
//     if(action.type === 'EMAIL') {
//         return {value: action.val, fname_isValid: state.fname_isValid, lname_isValid: state.lname_isValid, email_isValid: action.val.trim().length > 2 && action.val.includes('@'), username_isValid: state.username_isValid, password_isValid: state.password_isValid}
//     }
//     if(action.type === 'UNAME') {
//         return {value: action.val, fname_isValid: state.username_isValid, lname_isValid: state.lname_isValid, email_isValid: state.email_isValid, username_isValid: action.val.trim().length > 1, password_isValid: state.password_isValid}
//     }
//     if(action.type === 'PASSWORD') {
//         return {value: action.val, fname_isValid: state.username_isValid, lname_isValid: state.lname_isValid, email_isValid: state.email_isValid, username_isValid: state.username_isValid, password_isValid: action.val.trim().length > 1}
//     }
//     return {value: '', fname_isValid: null, lname_isValid: null, email_isValid: null, username_isValid: null, password_isValid: null};
// }

const SignUpForm = props => {

//     const [formValid, dispachFormValid] = useReducer(formReducer, {value: '', fname_isValid: true, lname_isValid: true, email_isValid: true, username_isValid: true, password_isValid: true});

    const [fnameIsValid, setFnameIsValid] = useState(true);
    const [lnameIsValid, setLnameIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [usernameIsValid, setUsernameIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);

    const fnameRef = useRef();
    const lnameRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

    // const validateInput = {
    //     fname: undefined,
    //     lname: undefined,
    //     email: undefined,
    //     username: undefined,
    //     password: undefined,
    // };

    const newUserHandler = event => {
        event.preventDefault();

        // console.log(formValid);

        const fname = fnameRef.current.value;
        const lname = lnameRef.current.value;
        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        // if(fname.trim().length < 1 || lname.trim().length < 1 || email.trim().length < 1 || username.trim().length < 1 || password.trim().length < 1){
        //     setIsValidInput(false);
        //     return;
        // };

        // dispachFormValid({ type: 'FNAME', val: fname});
        // // validateInput.fname = formValid.isValid;
        // dispachFormValid({ type: 'LNAME', val: lname});
        // // validateInput.lname = formValid.isValid;
        // dispachFormValid({ type: 'EMAIL', val: email});
        // // validateInput.email = formValid.isValid;
        // dispachFormValid({ type: 'UNAME', val: username});
        // // validateInput.username = formValid.isValid;
        // dispachFormValid({ type: 'PASSWORD', val: password});
        // // validateInput.password = formValid.isValid;
        // if(!(formValid.fname_isValid) || !(formValid.lname_isValid) || !(formValid.email_isValid) || !(formValid.username_isValid) || !(formValid.password_isValid)) {
        //     return;
        // }

        if(fname.trim().length < 1) {
            setFnameIsValid(false);
            console.log(fnameIsValid);
        }
        if(lname.trim().length < 1) {
            setLnameIsValid(false);
        }
        if(email.trim().length < 2 && email.includes('@')) {
            setEmailIsValid(false);
        }
        if(username.trim().length < 1) {
            setUsernameIsValid(false);
        }
        if(password.trim().length < 1) {
            setPasswordIsValid(false);
        }

        if(!fnameIsValid || !lnameIsValid || !emailIsValid || !usernameIsValid || !passwordIsValid) {
            return;
        }



        props.onSignUp(fname, lname, email, username, password);
    }

    const closeSignUpHandler =() => {
        props.onClose();
    }

    return (
        <form className={classes['sign-up-form']}>
            <label className={classes.fname}>First Name:</label>
            <input className={`${classes['fname-input']} ${!fnameIsValid && classes['invalid-input']}`} type='text' ref={fnameRef} />
            <label className={classes.lname}>Last Name:</label>
            <input className={`${classes['lname-input']} ${!lnameIsValid && classes['invalid-input']}`} type='text' ref={lnameRef} />
            <label className={classes.email}>E-Mail:</label>
            <input className={`${classes['email-input']} ${!emailIsValid && classes['invalid-input']}`} type='email' ref={emailRef} />
            <label className={classes.username}>User Name:</label>
            <input className={`${classes['un-input']} ${!usernameIsValid && classes['invalid-input']}`} type='text' ref={usernameRef} />
            <label className={classes.password}>Password:</label>
            <input className={`${classes['pw-input']} ${!passwordIsValid && classes['invalid-input']}`} type='text' ref={passwordRef} />
            <div className={classes.buttons}>
                <button className={classes['sign-up-button']} type="submit" onClick={newUserHandler}>Sign Up!</button>
                <button className={classes['close-button']} onClick={closeSignUpHandler}>Cancel</button>
            </div>
            
        </form>
    );
};

export default SignUpForm;