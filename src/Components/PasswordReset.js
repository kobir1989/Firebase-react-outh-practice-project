import React from "react";

const PasswordReset = () => {
  return (
    <div className="text-white">
      <div className="text-center mt-6 text-[1.5rem]">
        <h2>Reset Your Password</h2>
      </div>
      <form className="w-11/12 p-4 mx-auto lg:w-4/12">
        <div>
          <label className="ml-[.2rem]  text-[1.1rem] pb-2 ">
            New Password
            <input
              className="outline-red w-full h-[3rem] mb-6 pl-4 rounded-md w-full 
          h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-red"
              type="Password"
              placeholder="******"
            />
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="mt-4 mx-auto w-6/12 bg-[#FFCACA] text-[#251B37] 
        font-medium h-[3rem] rounded-md text-[1.2rem]"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;
