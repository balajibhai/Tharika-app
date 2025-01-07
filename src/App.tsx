import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./Hooks/customhooks";
import AfterAuth from "./Molecules/AfterAuth";
import AuthPage from "./Organisms/AuthPage";

const App = () => {
  const { loginState } = useAppSelector((state) => state.authenticationReducer);
  fetch("http://localhost:3001/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={loginState ? <Navigate to="/home" replace /> : <AuthPage />}
        />
        <Route
          path="/home"
          element={loginState ? <AfterAuth /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
