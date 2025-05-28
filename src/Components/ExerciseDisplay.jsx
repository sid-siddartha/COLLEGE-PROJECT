import React, { useEffect, useRef, useState } from "react";
import { exercise_list } from "../assets/Exercises/assets.js";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExerciseDisplay = () => {
  const navigate = useNavigate();
  const cardsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // track hovered card

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const handleExerciseClick = (id) => {
    navigate(`/exercise/${id}`);
  };

  return (
    <div className="bg-[#121212] px-4 py-10 ml-8 mr-8 mt-10 rounded-2xl">
      <h2 className="text-white font-anton text-[3vw] font-extrabold uppercase leading-none flex justify-center items-center">
        Transform Your Workout Routine
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mr-4 ml-4">
        {exercise_list.map((exercise, index) => (
          <div
            key={exercise._id}
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={() => handleExerciseClick(exercise._id)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="h-[350px] mt-8 ml-4 mr-4 relative border overflow-hidden rounded-2xl flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-10 bg-white/10 backdrop-blur-xl border border-white/20 text-white"
            style={{
              cursor: "pointer",
              opacity: hoveredIndex === index ? 0.9 : 1,
              boxShadow:
                hoveredIndex === index
                  ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  : "none",
              transition: "opacity 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src={exercise.image}
              alt={exercise.name}
              className="h-[220px] w-[320px] object-cover ml-3 mr-3 mt-2.4 rounded-t-xl"
            />
            <div className="p-3 ml-3 text-white flex flex-col justify-center">
              <h3 className="text-lg drop-shadow-md font-bold text-[tomato]">
                {exercise.name}
              </h3>
              <p className="text-sm mt-1 text-[#e3f4fe]">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseDisplay;
