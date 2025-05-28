import React from 'react';
import hero_background from '../assets/hero_background.mp4';

const HeroBg = () => {
  return (

      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-[1212.73px] h-full object-cover z-8 mt-35 ml-8 mr-8 rounded-2xl"
      >
        <source src={hero_background} type="video/mp4" />
      </video>
  );
};

export default HeroBg;
