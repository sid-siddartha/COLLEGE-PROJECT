import React from "react";
import HeroBg from "../assets/hero_background.mp4";
import ReactTypo from "./ReactTypo";
import Button from "@mui/material/Button";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-2xl"
      >
        <source src={HeroBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Heading */}
      <h1 className="text-white flex justify-center font-anton text-[9vw] font-extrabold leading-none uppercase mt-20 absolute w-full h-full">
        AI FITNESS TRAINER
      </h1>

      {/* Typed Text */}
      <div className="flex justify-center items-center absolute mt-32 w-full h-full z-10">
        <ReactTypo />
      </div>

      {/* Button */}
      <div className="flex justify-center items-center absolute mt-64 w-full h-full z-10">
        <Button
          variant="contained"
          sx={{
            color: "white",
            border: "1px solid white",
            backgroundColor: "black",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "gray",
              color: "white",
              borderColor: "tomato",
            },
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
