import React, { Component } from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>

        {/* Heading: Displays the heading "Featured Charts" with specific styling.
        Album List: A horizontal scrollable container (div with flex overflow-auto classes) that contains a list of AlbumItem components. The map function iterates over the albumsData array, creating an AlbumItem component for each album. Props such as name, desc, image, and id are passed to each AlbumItem. */}
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Trending Songs</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>

        {/* Heading: Displays the heading "Trending Songs" with specific styling.
        Song List: A horizontal scrollable container (div with flex overflow-auto classes) that contains a list of SongItem components. The map function iterates over the songsData array, creating a SongItem component for each song. Props such as name, desc, id, and image are passed to each SongItem. */}
      </div>
    </>
  );
}

export default DisplayHome;

// The DisplayHome component functions as follows:

// Navbar: At the top of the component, it includes the Navbar for navigation.
// Featured Charts Section: Below the navigation bar, it displays a "Featured Charts" section, which contains a list of albums. Each album is rendered using the AlbumItem component and displayed horizontally within a scrollable container.
// Trending Songs Section: Following the "Featured Charts" section, it displays a "Trending Songs" section, which contains a list of trending songs. Each song is rendered using the SongItem component and displayed horizontally within a scrollable container.
// This structure provides users with an easy-to-navigate interface where they can browse featured albums and trending songs. The use of horizontal scrolling allows for efficient use of space, especially on smaller screens.
