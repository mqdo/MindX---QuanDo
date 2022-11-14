import React, { useContext, useRef } from "react";

import { UserContext } from "../../../components/UserProvider";

const Login = () => {
  const setUser = useContext(UserContext).setNewUser;

  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: nameInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    setUser(newUser);
    nameInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" ref={nameInputRef} />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" ref={passwordInputRef} />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
