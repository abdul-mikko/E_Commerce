import React from "react";
import SignIn from "../../Components/SignIn/SignIn.Comp";
import SignUp from "../../Components/Sign-Up/Sign-Up.comp";
import "./login.styles.scss";

const LoginPage = () => {
  return (
    <div className="login">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginPage;
