import React, { useEffect } from "react";
import { useUser } from "../../components/UserProvider";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Auth = () => {
  const user = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <div>Auth</div>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Auth;
