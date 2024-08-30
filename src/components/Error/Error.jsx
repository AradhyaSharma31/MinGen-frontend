import React from "react";
import errorImage from "../Error/ErrorPageImage.png";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navitgate = useNavigate();
  return (
    <div className="h-[100vh] space-y-10 flex flex-col justify-center items-center pt-20">
      <img className="w-[500px] h-[500px]" src={errorImage} alt="Error" />
      <button
        onClick={() => navitgate("/")}
        className="sm:top-4 border w-28 h-10 rounded-full text-black bg-[#ffffff] font-semibold hover:bg-[#1e1e1e] hover:text-[#ffffff] transition-all duration-200 ease-in-out"
      >
        Go Back
      </button>
    </div>
  );
};
