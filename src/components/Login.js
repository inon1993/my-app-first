import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div>
      <h1>Hello Friend!</h1>
      <LoginForm onLoginForm={props.onLogin} />
    </div>
  );
};

export default Login;
