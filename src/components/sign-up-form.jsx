import { useState } from "react";
import { createUser, createUserDoc } from "../utils/firebase.utils";
import { FormInput } from "./form-input";
import { Button } from "./button";
import "./sign-up-form.styles.scss";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }

    try {
      const { user } = await createUser(email, password);
      createUserDoc(user, { displayName });
    } catch (error) {
      console.log("error creating the user", error.message);
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
      <h2>Don't have an account</h2>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Display Name"
          required
          onChange={handleOnChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          onChange={handleOnChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          onChange={handleOnChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          onChange={handleOnChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
