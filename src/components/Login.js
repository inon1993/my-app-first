import Card from './UI/Card'
import LoginForm from "./LoginForm";
import classes from './Login.module.css';

const Login = (props) => {

  const signUpHandler = () => {
    props.onSignUp();
  };

  return (
    <div >
      <Card className={classes['login-card']}>
      <h1 className={classes['login-hello']}>Hello Friend!</h1>
      <LoginForm onLoginForm={props.onLogin} />
      <div className={classes['sign-up-div']}>
        <button className={classes['sign-up']} onClick={signUpHandler}>Sign Up</button>
      </div>
      
    </Card>
    </div>
    
  );
};

export default Login;
