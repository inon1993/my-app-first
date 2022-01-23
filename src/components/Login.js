import Card from './UI/Card'
import LoginForm from "./LoginForm";
import classes from './Login.module.css';

const Login = (props) => {
  return (
    <div >
      <Card className={classes['login-card']}>
      <h1 className={classes['login-hello']}>Hello Friend!</h1>
      <LoginForm onLoginForm={props.onLogin} />
    </Card>
    </div>
    
  );
};

export default Login;
