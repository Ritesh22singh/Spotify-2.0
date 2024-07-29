import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams(); //  This hook returns an object of key/value pairs of the dynamic parameters from the current URL. In this case, it extracts the id parameter from the URL.

  const albumData = albumsData[id]; // This retrieves the specific album data from albumsData based on the id obtained from the URL.
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b> Spotify</b>
            <p>&#x2022; 1,345,768 likes</p>
            <p>
              &#x2022; <b>50 songs,</b>
            </p>
            <p> &#x2022; About 2 hr 35 min</p>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p className="mr-4">
          #<b>Title</b>
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Data Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>

      <div>
        <hr />
        {songsData.map((item, index) => (
          <div
            onClick={() => playWithId(item.id)}
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-10 mr-5" src={item.image} alt="" />
              {item.name}
            </p>
            <p className="text-[15px]">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">5 Days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbum;

// The DisplayAlbum component is responsible for showing detailed information about a selected album, including its cover image, name, description, and list of songs. It uses useParams to get the album ID from the URL and fetch the corresponding album data. It then renders this data along with a list of songs, allowing users to click on any song to play it. The component uses Tailwind CSS for styling and react-router-dom for routing and navigation.
