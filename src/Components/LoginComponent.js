import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../store/userNameSlice";

// The function uses useState to manage the login and username.
// useRef is utilised to focus on the input field.
// The input field automatically focus when the component mounts with useEffect.
/* The handleLogin function is called when the user clicks the login button. 
It checks if the username is not empty and sets the loggedIn state to true if it is not empty. 
If the username is empty, an alert is shown asking the user to enter their name.  */
/* The handleLogout function is called when the user clicks the logout button. 
It sets the loggedIn state to false and resets the username. */
export default function Login() {
  const { username } = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = () => {
    const enteredUsername = inputRef.current.value.trim();
    if (enteredUsername) {
      dispatch(setUsername(enteredUsername));
    } else {
      alert("Please enter your name to log in.");
    }
  };

  return (
    <div className="login">
      <label>
        <input className="login-input-field" ref={inputRef} placeholder="Enter your username" />
      </label>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
