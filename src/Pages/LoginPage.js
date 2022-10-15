import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
const LoginPage = () => {
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
        <form className="flex flex-col items-start w-11/12 p-12 mx-auto">
          <label className="ml-[.2rem] text-[#251B37] text-[1.1rem] mb-1">
            Email or Phone Number
          </label>
          <input
            className="outline-red w-full h-[3rem] mb-6 pl-4 rounded-md w-full 
          h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-red"
            type="email"
            placeholder="Exmple@email.com"
          />
          <p className="text-[.8rem] text-red mt-[-1rem]">
            Please Write your User Name or Email
          </p>

          <label className="ml-[.2rem] text-[#251B37] text-[1.1rem] mb-1">
            Password
          </label>
          <input
            className="outline-red w-full h-[3rem] mb-6 pl-4 rounded-md w-full
           h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-red"
            type="password"
            placeholder="******"
          />

          <p className="text-[.8rem] text-red mt-[-1rem]">
            Please Write your Password
          </p>

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
            <span className="border-b border-lightGray pb-1 hover:text-red  mx-2">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
