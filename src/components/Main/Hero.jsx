import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white min-h-screen px-4 py-8 bg-[#1a1a1a] space-y-16 h-[820px]">
      <div className="text-center space-y-7 max-w-3xl flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Discover Your New Favorite Tracks: AI-Curated Playlists Just for You!
        </h1>
        <h3 className="text-lg font-small w-[80%]">
          Dive Into a World of Personalized Music. Just Share Your Preferences
          Through a Simple Prompt, and Let Us Craft Playlists That Match Your
          Mood and Activities. Whether You’re Looking to Enhance a Party, Find
          the Right Music for Studying, or Simply Explore New Genres, We Have
          You Covered.
        </h3>
      </div>

      <div className="flex rounded-full items-center justify-center w-[65%] h-16">
        <div className="relative rounded-full size-60 before:absolute wrapper w-[100%] h-[100%] before:content-[''] before:animate-border-spin before:left-[-5%] before:top-[25%] overflow-hidden">
          <div className="border rounded-full border-gray-700 flex items-center justify-center h-[calc(100%-4px)] w-[calc(100%-4px)] absolute bg-[#161616] left-[2px] top-[2px] text-black">
            <form
              action=""
              className="flex justify-between pr-3 pl-4 w-[100%] "
            >
              <input
                type="text"
                name="ai-prompt"
                placeholder="Create a playlist for a rainy day..."
                className="text-white bg-transparent border-none focus:outline-none w-[85%]"
                autoComplete="off"
              />
              <button className="cursor-pointer w-[38px] h-[38px] rounded-full bg-[#ffffff] btn transition-all duration-100 ease-in-out btn">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
