import SignInForm from "../components/sign-in-form";
import SignUpForm from "../components/sign-up-form";

const Authentication = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "900px",
          margin: "30px  auto",
        }}
      >
        <SignInForm />

        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
