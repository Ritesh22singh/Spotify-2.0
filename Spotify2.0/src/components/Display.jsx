import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef(); //This hook creates a reference to the div element that wraps the component's content. This reference allows direct manipulation of the DOM element.

  const location = useLocation(); //This hook returns the current location object, which contains information about the URL (e.g., pathname, search, hash).

  const isAlbum = location.pathname.includes("album"); //This boolean variable checks if the current pathname includes the word "album", indicating that the user is viewing an album.

  const albumId = isAlbum ? location.pathname.slice(-1) : ""; // If isAlbum is true, this extracts the last character of the pathname (assumed to be the album ID). If isAlbum is false, it sets albumId to an empty string.

  const bgColor = albumsData[Number(albumId)].bgColor; //This chances of the background color of the album based on its ID from the albumsData array.

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }

    // This hook runs when the component mounts and whenever isAlbum or bgColor changes. It updates the background color of the div based on whether the user is viewing an album or not.
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;

// The Display component changes its background color dynamically based on the current route. If the user is viewing an album, it sets the background to a gradient based on the album's background color. Otherwise, it sets the background to a default color. It uses react-router-dom to render either the DisplayHome or DisplayAlbum component based on the URL path. The component uses hooks like useEffect and useRef to manage side effects and manipulate the DOM directly.
