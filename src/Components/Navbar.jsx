import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Dumbbell, Heart, Github, Twitter, Instagram } from 'lucide-react';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Hook for navigation

  const menuItems = ["Home", "Menu", "Mobile App", "Contact Us"];

  const handleLogoClick = () => {
    setMenu("Home");
    navigate("/"); // ✅ Go to the home page
  };

  return (
    <nav className="fixed flex items-center justify-between h-20 w-full px-8 bg-black backdrop-filter backdrop-blur-sm bg-opacity-100 z-100 ">
      {/* Logo - make it clickable */}
      <h1
        className="text-2xl font-bold text-[#e3f4fe] flex justify-between items-center cursor-pointer"
        onClick={handleLogoClick} // ✅ Add click handler
      >
        AI FITNESS TRAINER
        <Dumbbell className=" ml-2 h-8 w-8 text-blue-400 cursor-pointer transition-transform duration-1000 hover:rotate-[360deg]" />
      </h1>

      {/* Desktop menu */}
      <div className="hidden xl:flex items-center gap-10">
        <ul className="flex gap-10 mr-[310px] items-center text-[#999797] text-[18px] cursor-pointer">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setMenu(item)}
              className={`hover:border-b-2 border-[tomato] pb-[1px] ${
                menu === item ? "text-white border-b-2" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <Button className="flex items-center" color="success" variant="outlined">
          Sign in
        </Button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div
        className="xl:hidden cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 text-white z-40">
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                setMenu(item);
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-[tomato] transition"
            >
              {item}
            </div>
          ))}
          <Button
            className="flex items-center mt-2"
            color="success"
            variant="outlined"
          >
            Sign in
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
