import Card from '../UI/Card'
import SignUpForm from './SignUpForm';
import axios from 'axios';
import classes from './SignUp.module.css';

const SignUp = (props) => {

    const addNewUserHandler = (fname, lname, email, username, password) => {
        const payload = {
            fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: password,
          };
      
          axios({
            url: "/api/signup",
            method: "POST",
            data: payload,
          })
            .then(() => {
              console.log("Data has been sent to the server.");
              
            })
            .catch(() => {
              console.log("Internal server error.");
            });
    }

    const closeSignUpHandler = () => {
        props.onClose();
    }

  return (
    <div >
      <Card className={classes['sign-up-card']}>
      <h1 className={classes['sign-up-hello']}>Lets Sign You Up!</h1>
      <SignUpForm onLoginForm={props.onLogin} onClose={closeSignUpHandler} onSignUp={addNewUserHandler} />
    </Card>
    </div>
  );
};

export default SignUp;