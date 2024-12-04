import AfterAuth from "./Molecules/AfterAuth";
import { useAppSelector } from "./Hooks/customhooks";
import AuthPage from "./Organisms/AuthPage";

const App = () => {
  const { loginState } = useAppSelector((state) => state.authenticationReducer);

  return !loginState ? <AuthPage /> : <AfterAuth />;
};

export default App;
