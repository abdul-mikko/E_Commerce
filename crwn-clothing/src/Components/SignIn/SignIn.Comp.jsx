import React from "react";
import FormInput from "../Form-Input/Form-Input";
import "./SignIn.styles.scss";
import CustomButton from "../Custom-Button/Custom-Button.comp";
import { signInWithGoogle } from "../../Firebase/Firebase.util";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h3>SIGN IN</h3>
        <span>I Already Have an Acoount</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            required
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton>SIGN IN</CustomButton>
            <CustomButton onClick={() => signInWithGoogle()} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
