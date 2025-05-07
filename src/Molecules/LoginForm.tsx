import { useCallback, useState } from "react";
import InputField from "../Atoms/InputField";
import Text from "../Atoms/Text";
import CustomButton from "../Atoms/CustomButton";

type LoginFormProps = {
  onLogin: (username: string, password: string) => void;
  errorMessage?: string;
};

const LoginForm = (props: LoginFormProps) => {
  const { onLogin, errorMessage } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(() => {
    onLogin(username, password);
  }, [onLogin, username, password]);

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
      {errorMessage && (
        <Text
          content={errorMessage}
          variant="subtitle2"
          sx={{ color: "red" }}
        />
      )}
      <CustomButton content="Login" onClick={handleSubmit} />
    </div>
  );
};

export default LoginForm;
