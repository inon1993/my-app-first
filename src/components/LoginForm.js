import { useRef, useState } from "react";

const LoginForm = (props) => {
  const [isInputValid, setIsInputValid] = useState(true);

  const unRef = useRef();
  const passRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const username = unRef.current.value;
    const password = passRef.current.value;
    if (username.trim().length < 1 || password.trim().length < 1) {
      setIsInputValid(false);
      return;
    }
    props.onLoginForm(username);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Username:</label>
      <input type="text" ref={unRef} />
      <label>Password:</label>
      <input type="password" ref={passRef} />
      <button type="submit">Click to Login!</button>
      {!isInputValid && <p>Please enter valid Username and Password.</p>}
    </form>
  );
};

export default LoginForm;
