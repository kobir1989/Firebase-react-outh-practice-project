import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-12 text-white text-[2rem]">
        Welcome This is Home Page
      </div>
      <div className="w-8/12 mx-auto">
        <div className="w-12rem h-[12rem] bg-[#85586F] my-12"></div>
        <div className="w-12rem h-[12rem] bg-[#85586F] my-12"></div>
        <div className="w-12rem h-[12rem] bg-[#85586F] my-12"></div>
      </div>
    </div>
  );
};
export default Home;
