import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Genre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const genres = [
    { color: "#D64045", id: 1, name: "J-Pop" },
    { color: "#9ED8DB", id: 2, name: "Rock" },
    { color: "#467599", id: 3, name: "Classical" },
    { color: "#30F2F2", id: 4, name: "K-Pop" },
    { color: "#6A6262", id: 5, name: "Phonk" },
    { color: "#0075A2", id: 6, name: "Rap" },
    { color: "#481620", id: 7, name: "J-Pop" },
    { color: "#1A1B41", id: 8, name: "Rock" },
    { color: "#C2E7DA", id: 9, name: "Classical" },
    { color: "#545454", id: 10, name: "K-Pop" },
  ];

  const itemsToShow = 7; // Number of items to show in the carousel
  const totalItems = genres.length;

  const maxIndex = totalItems - itemsToShow;
  const isLeftArrowVisible = currentIndex > 0;
  const isRightArrowVisible = currentIndex < maxIndex;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <>
      <h1 className=" pl-8 flex justify-start text-white font-bold text-xl">
        Genre Highlights
      </h1>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex py-5 px-5"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {genres.map((genre) => (
              <div
                key={genre.id}
                className="group relative h-[300px] w-[230px] bg-transparent rounded-2xl flex justify-center items-center transition duration-200 ease-in-out hover:bg-[#353839]"
              >
                <div
                  className="shadow-2xl shadow-[#1c2321] relative h-[160px] w-[160px] rounded-full"
                  style={{ backgroundColor: genre.color }}
                >
                  <button
                    value="play-button"
                    name="play-button"
                    className="flex justify-center items-center absolute top-[62%] right-[-2%] group-hover:top-[58%] opacity-0 group-hover:opacity-100 h-[59px] w-[59px] bg-[#00FF7F] rounded-full transition-all duration-150 ease-in-out hover:h-[64px] hover:w-[64px] hover:bg-[#98FB98]"
                  >
                    <FontAwesomeIcon
                      className="h-[25px] w-[25px]"
                      icon={faPlay}
                    />
                  </button>
                </div>
                <h3 className="select-none text-white font-semibold absolute top-[83%] text-xl">
                  {genre.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`ml-5 h-[50px] w-[50px] absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-[#1e1e1e] border border-[#444242] hover:h-[58px] hover:w-[58px] hover:opacity-90 transition-all duration-200 ease-in-out text-white rounded-full ${
            !isLeftArrowVisible && "hidden"
          }`}
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff" }} />
        </button>
        <button
          className={`mr-6 h-[50px] w-[50px] absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-[#1e1e1e] border border-[#444242] hover:h-[58px] hover:w-[58px] hover:opacity-90 transition-all duration-200 ease-in-out text-white rounded-full ${
            !isRightArrowVisible && "hidden"
          }`}
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
        </button>
      </div>
    </>
  );
};

export default Genre;
