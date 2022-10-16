import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KEY } from "../Components/config";
import Navbar from "../Components/Navbar";

const SignInPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": " application/json" },
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        navigate("/login");
        return res.json();
      } else {
        res.json().then(() => {
          let error = "Request Faild!";
          alert(error);
        });
      }
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
          <h2 className=" text-[#251B37] mt-8 text-[1.5rem]">Sign In</h2>
        </div>
        <form
          className="flex flex-col items-start w-11/12 p-12 mx-auto"
          onSubmit={submitHandler}
        >
          <label className="ml-[.2rem] text-[#251B37] text-[1.1rem] mb-1">
            Email
          </label>

          <input
            className="outline-0 w-full h-[3rem] mb-6 pl-4 rounded-md w-full 
          h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-gray"
            type="email"
            placeholder="Exmple@email.com"
            ref={emailInputRef}
          />

          <label className="ml-[.2rem] text-[#251B37] text-[1.1rem] mb-1">
            Password
          </label>

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
            Create Account
          </button>
        </form>
        <p className="text-gray mb-6 text-[.8rem]">
          Already a Member?
          <Link to="/login">
            <span className="border-b border-lightGray pb-1 hover:text-red  mx-2">
              Login
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignInPage;
