import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { exercise_list } from "../assets/Exercises/assets.js";
import Navbar from "../Components/Navbar.jsx";

const ShowExercise = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const exercise = exercise_list.find((ex) => ex._id === id);

  const handleGetStarted = async () => {
    try {
      await fetch("http://127.0.0.1:5000/start-exercise", { method: "GET" });
      console.log("Exercise tracking started!");

      if (navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } else {
        alert("Your browser does not support accessing the webcam.");
      }
    } catch (error) {
      console.error("Failed to start exercise tracking:", error);
    }
  };

  if (!exercise) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#121212] to-[#1f1f1f] text-white">
        <h2 className="text-3xl font-bold mb-4">Exercise not found</h2>
        <button
          className="mt-4 px-6 py-3 bg-[tomato] text-white rounded-full shadow hover:scale-105 transition-transform"
          onClick={() => navigate("/")}
        >
          Back to Exercises
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden mb-0">
      <section>
        <Navbar />
      </section>
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#121212] to-[#1f1f1f] px-4 py-10">
        <div className="bg-[#1c1c1c] p-6 rounded-3xl shadow-lg max-w-4xl w-full mt-20">
          <h2 className="text-[3vw] mt-[20px] font-anton font-extrabold uppercase text-center text-[tomato] mb-6 tracking-wider">
            {exercise.name}
          </h2>
          <img
            src={exercise.image}
            alt={exercise.name}
            className="h-[400px] w-full object-cover rounded-2xl mb-6 shadow-xl border border-[#2c2c2c]"
          />
          <div className="bg-[#2c2c2c] p-4 rounded-xl text-gray-300 shadow-inner">
            <h3 className="text-xl font-semibold mb-2 text-white">Description</h3>
            <p className="leading-relaxed">{exercise.description}</p>
          </div>
          <button
            className="mt-6 w-full px-6 py-3 bg-[tomato] text-white rounded-full font-bold shadow hover:scale-105 transition-transform"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
          <button
            className="mt-4 w-full px-6 py-3 bg-transparent border border-[tomato] text-[tomato] rounded-full font-bold hover:bg-[tomato] hover:text-white transition-colors"
            onClick={() => navigate("/")}
          >
            Back to Exercises
          </button>

          {/* Webcam feed */}
          <video
            ref={videoRef}
            id="exerciseCam"
            className="mt-6 w-full h-[400px] bg-black rounded-2xl border border-gray-700"
            autoPlay
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ShowExercise;