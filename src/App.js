import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";
import UserProfilePage from "./Pages/UserProfilePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="user-profile" element={<UserProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
