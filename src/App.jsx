import React from "react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { UserPlaylists } from "./components/UserPlaylists/UserPlaylists";
import { Liked } from "./components/LikedPlaylists/Liked";
import { Error } from "./components/Error/Error"; // Ensure this is the correct path
import { AuthProvider } from "./components/Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<UserPlaylists />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
