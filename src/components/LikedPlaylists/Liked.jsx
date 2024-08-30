import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faSolidHeart,
  faBookmark as faSolidBookmark,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import "../TopPlaylists/PlaylistStyle.css";

export const Liked = () => {
  const [likedItems, setLikedItems] = useState({});
  const [bookmarkedItems, setBookmarkedItems] = useState({});

  const [data, setData] = useState([
    {
      id: 1,
      title: "Korean jazz",
      teamName: "Google",
      likes: 305,
      views: 100,
      color: "#C1666B",
      teams: true,
    },
    {
      id: 2,
      title: "Rocky beats",
      teamName: "Willy",
      likes: 160,
      views: 67.1,
      color: "#60495A",
      teams: false,
    },
    {
      id: 3,
      title: "Classic Music",
      teamName: "Dominos",
      likes: 510,
      views: 310,
      color: "#342E37",
      teams: true,
    },
    {
      id: 4,
      title: "Feeling Joy",
      teamName: "Rockstar",
      likes: 971,
      views: 519.3,
      color: "#4D7EA8",
      teams: true,
    },
    {
      id: 5,
      title: "Over Cloud nine",
      teamName: "Willy",
      likes: 160,
      views: 67.1,
      color: "#E71D36",
      teams: false,
    },
  ]);

  const handleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleBookmark = (id) => {
    setBookmarkedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-10 px-6 md:px-10 py-10 md:h-[25rem]">
        <div className="gradient flex justify-center items-center rounded-full shadow-md shadow-[#2b2727] h-32 md:h-[50%] w-32 md:w-[10rem]">
          <FontAwesomeIcon
            className="h-1/3 hover:-rotate-12 hover:h-2/5 transition-all duration-300 ease-in-out"
            icon={faSolidHeart}
            style={{ color: "#ffffff", fontSize: "24px" }}
          />
        </div>
        <span className="flex justify-center items-center text-center mt-5 md:mt-0 h-[50%] w-full md:w-[20rem] text-2xl md:text-4xl font-semibold text-[#a9e1f7]">
          Liked Playlists
        </span>
      </div>

      <div className="flex flex-col min-h-[50rem] max-h-[100%]">
        <div className="pl-5 mt-7 carousel-container px-2 flex flex-wrap items-center w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
            >
              <div className="box">
                <div
                  style={{ backgroundColor: item.color }}
                  className="top--inner--box shadow-2xl shadow-[#1c2321] relative"
                >
                  <button
                    value="play-button"
                    name="play-button"
                    className="play--btn opacity-0 flex justify-center items-center absolute top-2/3 right-0 transform -translate-y-1/2 h-14 w-14 bg-[#00FF7F] rounded-full transition-all duration-150 ease-in-out hover:h-15 hover:w-15 hover:bg-[#98FB98]"
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faPlay} />
                  </button>
                </div>
                <div className="inner--box">
                  <span className="h-8 w-[65%] flex items-center text-sm">
                    {item.title.length > 20
                      ? `${item.title.slice(0, 20)}...`
                      : item.title}
                  </span>
                  <span className="icons--style flex space-x-2">
                    <button
                      onClick={() => handleLike(item.id)}
                      className="outer--icon--div"
                    >
                      <FontAwesomeIcon
                        icon={likedItems[item.id] ? faSolidHeart : faHeart}
                        style={{ height: "50%", color: "#000000" }}
                      />
                    </button>
                    <button
                      onClick={() => handleBookmark(item.id)}
                      className="outer--icon--div"
                    >
                      <FontAwesomeIcon
                        icon={
                          bookmarkedItems[item.id]
                            ? faSolidBookmark
                            : faBookmark
                        }
                        style={{ height: "50%", color: "#000000" }}
                      />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Liked;
