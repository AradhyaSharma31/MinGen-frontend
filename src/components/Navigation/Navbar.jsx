import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";

const Navbar = () => {
  const targetScrollPosition = 70;
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const [clickProfile, setClickProfile] = useState(false);
  const [spotifyAuthUrl, setSpotifyAuthUrl] = useState("");
  const hasFetched = useRef(false);

  // Use authentication context
  const { isAuthenticated, login, logout } = useAuth();

  const handleProfileClicks = () => {
    setClickProfile((prev) => !prev);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseMenu = () => {
    setClickProfile(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollPosition(scrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const LoginAPICall = async () => {
    try {
      console.log("clicked");
      const response = await axios.get("http://localhost:9010/api/login");
      const redirectURL = response.data.spotifyAuthUrl;
      window.location.href = redirectURL;
    } catch (error) {
      console.error("Error during login redirection:", error);
    }
  };

  // useEffect(() => {
  //   if (!hasFetched.current) {
  //     const fetchAuthData = async () => {
  //       const queryParams = new URLSearchParams(window.location.search);
  //       const code = queryParams.get("code");
  //       console.log("queryparams: ", queryParams, "--------code: ", code);

  //       if (code) {
  //         try {
  //           const response = await fetch(
  //             `http://localhost:9010/api/callback?code=${code}`
  //           );

  //           if (!response.ok) {
  //             throw new Error("Network response was not ok");
  //           }

  //           navigate("/");
  //           login();
  //         } catch (error) {
  //           console.error("Error handling OAuth callback:", error);
  //         }
  //       }
  //     };

  //     fetchAuthData();
  //     hasFetched.current = true;
  //   }
  // }, [navigate]);

  return (
    <header className="select-none fixed top-0 left-0 w-full z-50 text-white bg-transparent transition-all duration-300 ease-in-out">
      <div
        className={`${
          scrollPosition >= targetScrollPosition
            ? "py-6 bg-[#101010] shadow-sm shadow-[#1E1E1E]"
            : "py-8"
        } flex justify-between items-center px-6 md:px-12 lg:px-16 transition-all duration-300 ease-in-out`}
      >
        <div
          onClick={() => navigate("/")}
          className="border border-gray-700 px-3 py-1 rounded-full cursor-pointer text-lg font-semibold text-white"
        >
          MinGen
        </div>

        {isAuthenticated ? (
          <div className="relative">
            <div
              onClick={handleProfileClicks}
              className="select-none cursor-pointer h-10 w-10 rounded-full bg-white text-black flex justify-center items-center font-semibold"
            >
              A
            </div>
            {clickProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] text-white border border-[#a58f8f] rounded-md shadow-lg">
                <ul className="py-2">
                  <li
                    onClick={() => {
                      navigate("/playlists");
                      handleCloseMenu();
                    }}
                    className="block px-4 py-2 hover:bg-[#312f2f] cursor-pointer"
                  >
                    Your Playlists
                  </li>
                  <li
                    onClick={() => {
                      navigate("/liked");
                      handleCloseMenu();
                    }}
                    className="block px-4 py-2 hover:bg-[#312f2f] cursor-pointer"
                  >
                    Liked Playlists
                  </li>
                  <hr className="border-[#a58f8f]" />
                  <li
                    onClick={() => {
                      logout();
                      handleCloseMenu();
                    }}
                    className="block px-4 py-2 hover:bg-[#312f2f] cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            <button
              // onClick={() => login()}
              onClick={LoginAPICall}
              className="font-semibold hover:text-[1.15rem] transition-all duration-100 ease-in-out"
            >
              Sign Up
            </button>
            <button
              onClick={LoginAPICall} // Handle login
              className="border border-white bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-transparent hover:text-white transition duration-200"
            >
              Log in
            </button>
          </div>
        )}
      </div>

      <button
        onClick={handleScrollToTop}
        className={`${
          scrollPosition <= targetScrollPosition ? "hidden" : "flex"
        } group justify-center items-center bg-[#1a1a1a] fixed h-12 w-12 hover:h-28 hover:w-28 left-10 bottom-12 rounded-full border border-[#6e6565] hover:bg-transparent transition-all duration-300 ease-in-out`}
      >
        <FontAwesomeIcon
          className="group-hover:h-[30%] group-hover:w-[3s0%] transition-all duration-300 ease-in-out"
          icon={faArrowUp}
          style={{ color: "#ffffff" }}
        />
      </button>
    </header>
  );
};

export default Navbar;
