import { useCallback, useState } from "react";
import InputField from "../Atoms/InputField";
import Text from "../Atoms/Text";
import CustomButton from "../Atoms/CustomButton";

type SignupFormProps = {
  onSignup: (
    username: string,
    password: string,
    confirmPassword: string
  ) => void;
  errorMessage?: string;
};

const SignupForm = (props: SignupFormProps) => {
  const { onSignup, errorMessage } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = useCallback(() => {
    onSignup(username, password, confirmPassword);
  }, [confirmPassword, onSignup, username, password]);

  return (
    <div>
      <InputField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errorMessage && (
        <Text
          content={errorMessage}
          variant="subtitle2"
          sx={{ color: "red" }}
        />
      )}
      <CustomButton content="Sign up" onClick={handleSubmit} />
    </div>
  );
};

export default SignupForm;
