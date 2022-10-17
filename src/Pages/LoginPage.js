import React, { useRef, useContext } from "react";
import AuthContext from "../store/auth-context";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { KEY } from "../Components/config";

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const url = ` https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": " application/json" },
    })
      .then((res) => {
        if (res.ok) {
          navigate("/");
        } else {
          alert("Password Incorrect!");
        }
        return res.json();
      })
      .then((data) => {
        const expireInTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
        authCtx.login(data.idToken, expireInTime.toISOString());
      });
  };
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center mt-[8rem] w-[100%]
     mx-auto lg:w-[40%] bg-white rounded-xl shadow-xl"
      >
        <div>
          <h2 className=" text-[#251B37] mt-8 text-[1.5rem]">Login</h2>
        </div>
        <form className="flex flex-col items-start w-11/12 p-12 mx-auto" onSubmit={formSubmitHandler}>
          <label className="ml-[.2rem] text-[#251B37] text-[1.1rem] mb-1">Email or Phone Number</label>
          <input
            className="outline-0 w-full h-[3rem] mb-6 pl-4 rounded-md w-full 
          h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-gray"
            type="email"
            placeholder="Exmple@email.com"
            ref={emailInputRef}
          />

          <label className="ml-[.2rem] text-[#251B37] text-[1.1rem] mb-1">Password</label>
          <input
            className="outline-0 w-full h-[3rem] mb-6 pl-4 rounded-md w-full
           h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-gray"
            type="password"
            placeholder="******"
            ref={passwordInputRef}
          />

          <button
            className="w-6/12 mt-4 mx-auto bg-[#FFCACA] text-[#251B37] 
        font-medium h-[3rem] rounded-md text-[1.2rem]"
          >
            Login
          </button>
        </form>
        <p className="text-gray mb-6 text-[.8rem]">
          Don't have and account?
          <Link to="/signin">
            <span className="border-b border-lightGray pb-1 hover:text-red  mx-2">Sign Up</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
