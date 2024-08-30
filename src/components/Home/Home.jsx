import React from "react";
import { Hero } from "../Main/Hero";
import Genre from "../Genre/Genre";
import { PlaylistCard } from "../TopPlaylists/PlaylistCard";
import { Join } from "../Join/Join";

export const Home = () => {
  return (
    <>
      <Hero />
      <Genre />
      <PlaylistCard />
      <Join />
    </>
  );
};
