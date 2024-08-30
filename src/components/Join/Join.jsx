// src/Join.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../Context/AuthProvider";

export const Join = () => {
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    return null; // Don't render the Join component if authenticated
  }

  return (
    <div className="select-none flex justify-center h-[220px]">
      <div className="bg-[rgb(13,13,13)] sm:space-y-2 lg:space-y-7 p-3 flex flex-col w-[80%] lg:h-[75%] sm:h-[88%] text-white rounded-3xl my-5">
        <div className="w-[90%] space-x-2 flex flex-row justify-between items-center">
          <h1 className="text-4xl w-[20%]">
            <FontAwesomeIcon
              icon={faFaceSmile}
              style={{ color: "#ffffff" }}
              className="text-5xl mt-3"
            />
          </h1>
          <span className="flex justify-between flex-col w-[80%]">
            <span className="font-bold flex justify-start text-lg">Shhh!</span>
            <p className="flex justify-start text-ellipsis">
              Stay in the loop with the latest music and personalized playlists.
              Join our MinGen community now!
            </p>
          </span>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={login}
            className="sm:top-4 border w-28 h-10 rounded-full text-black bg-[#ffffff] font-semibold hover:bg-[#0d0d0d] hover:text-[#ffffff] transition-all duration-200 ease-in-out"
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};
