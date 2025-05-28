import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import ReactTypo from "../Components/ReactTypo";
import Button from "@mui/material/Button";
import Reviews from "../Components/Reviews";
import HeroBg from "../Components/HeroBg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExerciseDisplay from "../Components/ExerciseDisplay";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import AboutUs from "../Components/AboutUs";


const Home = () => {


  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section

        className="relative  flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20"
      >
        <HeroBg />

        <h1

          className="text-white font-anton text-[9vw] font-extrabold uppercase leading-none -mt-60 z-9"
        >
          AI FITNESS TRAINER
        </h1>

        <div  className="-mt-15 z-9">
          <ReactTypo />
        </div>

        <div  className="-mt-10 z-9">
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
      </section>

      {/* Reviews Section */}
      <section className="mt-[100px]">
        <h1 className="text-white font-anton text-[3vw] font-extrabold uppercase leading-none flex justify-center items-center mt-45 -mb-10">
          Trusted by Fitness Enthusiasts Across India
        </h1>
        <Reviews />
      </section>

      {/* About Us section */}
      <AboutUs/>

      {/* exercise display */}
      <section >
          <ExerciseDisplay/>
       </section>

       {/* contact us */}
       <section>
        <Contact/>
       </section>

      {/* Footer */}
      <section >
        <Footer/>
      </section>

      
    </div>
  );
};

export default Home;
