import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />

          <img
            img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black px-3 py-1 text-[15px] rounded-2xl cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            R
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-[#C9ADA7] text-white px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className="bg-[#7F9172] text-white  px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;

// The Navbar component renders a navigation bar with the following features:

// Navigation Arrows: Allows users to navigate back and forth in the browser history.
// Right-Side Controls: Includes buttons for "Explore Premium", "Install App", and a user icon.
// Category Filters: Provides buttons for filtering content by categories (All, Music, Podcasts).
// The component uses flexbox for layout and Tailwind CSS classes for styling. The navigation arrows and buttons are interactive, and the navigate function from react-router-dom handles the navigation logic.
