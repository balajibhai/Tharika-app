import LoginPage from "./Molecules/LoginPage";
import AfterAuth from "./Molecules/AfterAuth";
import { useAppSelector } from "./Hooks/customhooks";

const App = () => {
  const { loginState } = useAppSelector((state) => state.authenticationReducer);

  return !loginState ? <LoginPage /> : <AfterAuth />;
};

export default App;
