import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const naviage = useNavigate();
  return (
    <div
      onClick={() => naviage(`/album/${id}`)} // Here we navigate our music app with the help of naviage hook with album id
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1 ">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;

// The AlbumItem component is a clickable item that displays an album's image, name, and description. When the user clicks on the item, they are navigated to the album's detail page using the useNavigate hook from react-router-dom. The component is styled using Tailwind CSS classes to ensure a consistent and responsive design.
