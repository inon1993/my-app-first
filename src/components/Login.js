import Card from './UI/Card'
import LoginForm from "./LoginForm";
import classes from './Login.module.css';
import axios from 'axios';
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

const Login = (props) => {

  const ctx = useContext(AuthContext);

  const onLoginCheck = (username, password) => {

    const payload = {
      username: username,
      password: password,
    };
    console.log(payload);

    axios({
      url: "/api/login",
      method: "POST",
      data: payload,
    })
      .then((response) => {
        if (response.data.msg === "Login was successfull") {
          // setIsUsernameExist(true);
          ctx.onLogin();
        } else {
          // setIsUsernameExist(false);
          console.log("Data has been sent to the server.");
        }
      })
      .catch(() => {
        console.log("Internal server error.");
      });
  };

  const signUpHandler = () => {
    props.onSignUp();
  };

  return (
    <div >
      <Card className={classes['login-card']}>
      <h1 className={classes['login-hello']}>Hello Friend!</h1>
      <LoginForm onLoginForm={onLoginCheck} />
      {/* <LoginForm onLoginForm={props.onLogin} /> */}
      <div className={classes['sign-up-div']}>
        <button className={classes['sign-up']} onClick={signUpHandler}>Sign Up</button>
      </div>
      
    </Card>
    </div>
    
  );
};

export default Login;
