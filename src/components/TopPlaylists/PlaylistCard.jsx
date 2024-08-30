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
import "./PlaylistStyle.css";

export const PlaylistCard = () => {
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
    <div className="pt-14 h-[450px]">
      <div className="flex justify-between px-7">
        <h3 className="flex justify-start text-white font-bold text-xl">
          Top Playlists
        </h3>
        <h6 className="text-white font-semibold cursor-pointer hover:text-gray-200">
          Show All
        </h6>
      </div>

      <div className="pl-5 mt-7 carousel-container px-2 flex items-center w-[100vw]">
        {data.map((item) => (
          <div key={item.id}>
            <div className="box">
              <div
                style={{ backgroundColor: item.color }}
                className="top--inner--box shadow-2xl shadow-[#1c2321]"
              >
                <button
                  value="play-button"
                  name="play-button"
                  className="play--btn opacity-0 flex justify-center items-center relative top-[62%] right-[-65%] h-[55px] w-[55px] bg-[#00FF7F] rounded-full transition-all duration-150 ease-in-out hover:h-[60px] hover:w-[60px] hover:bg-[#98FB98]"
                >
                  <FontAwesomeIcon
                    className="h-[25px] w-[25px]"
                    icon={faPlay}
                  />
                </button>
              </div>
              <div className="inner--box">
                <span className="h-[30px] w-[65%] flex items-center text-[13px]">
                  {item.title.length > 20
                    ? `${item.title.slice(0, 20)}...`
                    : item.title}
                </span>
                <span className="icons--style">
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
                        bookmarkedItems[item.id] ? faSolidBookmark : faBookmark
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
  );
};
