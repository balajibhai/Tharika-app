import { useCallback, useState } from "react";
import LoginForm from "../Molecules/LoginForm";
import SignupForm from "../Molecules/SignupForm";
import Container from "@mui/material/Container";
import { useAppDispatch, useAppSelector } from "../Hooks/customhooks";
import { credentialsHandler, loginHandler } from "../Redux/authentication";
import Text from "../Atoms/Text";
import BlueLink from "../Atoms/BlueLink";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const { credentials } = useAppSelector(
    (state) => state.authenticationReducer
  );

  const handleLogin = useCallback(
    (username: string, password: string) => {
      if (
        username === credentials.username &&
        password === credentials.password
      ) {
        setErrorMessage("");
        dispatch(loginHandler(true));
      } else {
        setErrorMessage("Invalid username or password");
      }
    },
    [credentials, dispatch]
  );

  const handleSignup = useCallback(
    (username: string, password: string, confirmPassword: string) => {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
      } else if (!username || !password) {
        setErrorMessage("Please fill in all fields");
      } else {
        setErrorMessage("");
        dispatch(credentialsHandler({ username, password }));
        setIsLogin(true);
      }
    },
    [dispatch]
  );

  return (
    <Container maxWidth="sm">
      {isLogin ? (
        <div>
          <Text content="Login" variant="h6" sx={{ fontWeight: "bold" }} />
          <LoginForm onLogin={handleLogin} errorMessage={errorMessage} />
          <BlueLink
            content="Don't have an account? Sign Up"
            onClick={() => setIsLogin(false)}
          />
        </div>
      ) : (
        <div>
          <Text content="Sign up" variant="h6" sx={{ fontWeight: "bold" }} />
          <SignupForm onSignup={handleSignup} errorMessage={errorMessage} />
          <BlueLink
            content="Already have an account? Login"
            onClick={() => setIsLogin(true)}
          />
        </div>
      )}
    </Container>
  );
};

export default AuthPage;
