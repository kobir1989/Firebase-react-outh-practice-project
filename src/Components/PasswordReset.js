import React, { useRef, useContext } from "react";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import { KEY } from "./config";
const PasswordReset = () => {
  const authCtx = useContext(AuthContext);
  const newPassword = useRef();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const password = newPassword.current.value;
    if (password.length < 6) {
      alert("Password should be at least 6 character");
      return;
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.idToken,
            password: password,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "Application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            authCtx.logout();
            navigate("/login");
            alert("Password changed successfully");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div className="text-white">
      <div className="text-center mt-6 text-[1.5rem]">
        <h2>Reset Your Password</h2>
      </div>
      <form className="w-11/12 p-4 mx-auto lg:w-4/12" onSubmit={submitHandler}>
        <div>
          <label className="ml-[.2rem]  text-[1.1rem] pb-2 ">
            New Password
            <input
              className="outline-red w-full h-[3rem] mb-6 pl-4 rounded-md w-full 
          h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-red text-gray"
              type="Password"
              placeholder="******"
              ref={newPassword}
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
