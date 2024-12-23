import AfterAuth from "./Molecules/AfterAuth";
import { useAppSelector } from "./Hooks/customhooks";
import AuthPage from "./Organisms/AuthPage";

const App = () => {
  const { loginState } = useAppSelector((state) => state.authenticationReducer);
  fetch("http://localhost:3001/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return !loginState ? <AuthPage /> : <AfterAuth />;
};

export default App;
