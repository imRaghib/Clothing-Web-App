import { signInWithGooglePopup, createUserDoc } from "../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDoc(user);
  };
  return (
    <>
      <h1>Sign Up</h1>
      <button onClick={logGoogleUser}>SignIn</button>
    </>
  );
};

export default SignIn;
