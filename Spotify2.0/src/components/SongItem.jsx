import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  // const naviage = useNavigate();
  const { playWithId } = useContext(PlayerContext); // useContext: This hook is used to access the PlayerContext. Specifically, it retrieves the playWithId function, which is used to play a song by its ID.
  return (
    <div
      // onClick={() => naviage(`/Trendings/${id}`)} // Here we navigate our music app with the help of naviage hook
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;

// This one is for Song item details which is passed in props

// The SongItem component represents a single song item in a list, showing the song's image, name, and description. It uses Tailwind CSS for styling and is interactive, as clicking on it triggers the playWithId function from the PlayerContext to start playing the song.

// The playWithId function is expected to handle the logic for playing the song based on its ID. This component is designed to be used within a list or grid of songs, providing a consistent layout and interaction pattern for each song item.
