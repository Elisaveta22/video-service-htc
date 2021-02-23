import SignIn from "./SignIn";

const SignInModalWindow = ({ active, setActive }) => {
  return (
    <div
      className={active ? "sign-in-container active" : "sign-in-container"}
      onClick={() => setActive(false)}
    >
      <SignIn />
    </div>
  );
};

export default SignInModalWindow;
