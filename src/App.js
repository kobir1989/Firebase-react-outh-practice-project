import "./App.css";
import React, { useContext } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";
import UserProfilePage from "./Pages/UserProfilePage";
import AuthContext from "./store/auth-context";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        {authCtx.isLoggedIn && (
          <Route path="/user-profile" element={<UserProfilePage />} />
        )}
      </Routes>
    </>
  );
}

export default App;
