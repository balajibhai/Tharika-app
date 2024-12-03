import CustomButton from "../Atoms/CustomButton";
import { useAppDispatch } from "../Hooks/customhooks";
import { loginHandler } from "../Redux/authentication";

type LoginPageProps = {};

const LoginPage = (props: LoginPageProps) => {
  const dispatch = useAppDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CustomButton
        content="Login"
        onClick={() => dispatch(loginHandler(true))}
      />
    </div>
  );
};

export default LoginPage;
