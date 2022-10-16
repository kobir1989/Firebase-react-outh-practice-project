import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
const Navbar = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const auth = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };
  return (
    <div
      className="flex justify-between items-center px-8
     lg:px-16 py-8 bg-[#372948] h-[4rem] text-white"
    >
      <div>
        <Link to="/">
          <h2 className="text-xl text-[1.4rem] font-medium">Home</h2>
        </Link>
      </div>
      <div>
        <ul className="flex gap-8">
          {auth && (
            <li className="lg:text-[1.2rem] text-[.9rem] font-medium">
              <Link to="/user-profile">Profile</Link>
            </li>
          )}
          {!auth && (
            <li className="lg:text-[1.2rem] text-[.9rem] font-medium">
              <Link to="/login">Login</Link>
            </li>
          )}
          {!auth && (
            <li className="lg:text-[1.2rem] text-[.9rem] font-medium">
              <Link to="/signin"> Signin</Link>
            </li>
          )}
          {auth && (
            <li className="lg:text-[1.2rem] text-[.9rem] font-medium">
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
