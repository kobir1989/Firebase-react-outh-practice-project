import React from "react";
import PasswordReset from "../Components/PasswordReset";
import Navbar from "../Components/Navbar";

const UserProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="text-white text-center mt-8 text-[1.5rem]">
        <div className="flex flex-col items-center justify-center mt-[2rem]">
          <div className="w-[8rem] h-[8rem] bg-gray rounded-full "></div>
          <div>
            <h2>Kabir Hossain</h2>
          </div>
        </div>
        <PasswordReset />
      </div>
    </>
  );
};

export default UserProfilePage;
