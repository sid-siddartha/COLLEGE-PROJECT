import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#121212] px-4 py-10 ml-8 mr-8 rounded-2xl flex justify-center opacity-0"
    >
      <div className="max-w-4xl w-full bg-[#1c1c1c] p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold text-[tomato] mb-4 text-center uppercase tracking-wider">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-6 text-center">
          Welcome to our AI-powered fitness trainer! Our mission is to bring
          cutting-edge technology to your workouts, helping you move smarter,
          safer, and more effectively.
        </p>
        <div className="flex flex-col gap-4">
          <div className="bg-[#2c2c2c] p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-white mb-2">
              🏋️‍♂️ Posture Detection
            </h2>
            <p className="leading-relaxed">
              Using advanced computer vision, we detect your body posture in
              real-time, ensuring each movement is safe and correct.
            </p>
          </div>
          <div className="bg-[#2c2c2c] p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-white mb-2">
              🔢 Rep Counting
            </h2>
            <p className="leading-relaxed">
              Never lose count again! Our AI automatically tracks your reps and
              sets, keeping you focused on your performance.
            </p>
          </div>
          <div className="bg-[#2c2c2c] p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-white mb-2">
              🧠 Smart Corrections
            </h2>
            <p className="leading-relaxed">
              Receive instant feedback on your form and technique so you can
              make quick adjustments and train more effectively.
            </p>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-400 italic">
          We believe fitness should be smart, fun, and safe for everyone!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
