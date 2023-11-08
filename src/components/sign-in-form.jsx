import { useContext, useState } from "react";
import {
  signInUser,
  createUserDoc,
  signInWithGooglePopup,
} from "../utils/firebase.utils";
import { FormInput } from "./form-input";
import { Button } from "./button";
import "./sign-in-form.styles.scss";

const defaultFormField = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const signInGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUser(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Email"
          required
          onChange={handleOnChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleOnChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={"google"} type="button" onClick={signInGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
