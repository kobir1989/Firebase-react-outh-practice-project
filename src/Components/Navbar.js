import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-[#372948] h-[4rem]">
      <div>
        <h2 className="text-xl text-[1.4rem] font-medium">Home</h2>
      </div>
      <div>
        <ul className="flex gap-8">
          <li className="text-[1.2rem] font-medium">
            <Link to="/user-profile">Profile</Link>
          </li>
          <li className="text-[1.2rem] font-medium">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-[1.2rem] font-medium">
            <Link to="/signin"> Signin</Link>
          </li>
          <li className="text-[1.2rem] font-medium">
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
