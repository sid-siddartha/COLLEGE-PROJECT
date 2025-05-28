import { ReactTyped } from "react-typed";
import React from "react";

const ReactTypo = () => (
  <div className="relative flex justify-center items-center h-[200px] w-[1300px] overflow-visible">
  <ReactTyped
    className="text-[#ffffff] font-anton text-[2vw] w-[90%] max-w-[800px] font-extrabold leading-tight uppercase text-center"
    strings={[
      "AI fitness trainer helps you correct your posture.",
      "AI fitness trainer helps you count your reps.",
      "AI fitness trainer helps you analyze your form.",
      "AI fitness trainer helps you improve your balance.",
      "AI fitness trainer helps you track your progress.",
      "AI fitness trainer helps you boost your endurance.",
      "AI fitness trainer helps you monitor your breathing.",
      "AI fitness trainer helps you adjust your alignment.",
      "AI fitness trainer helps you optimize your workout.",
      "AI fitness trainer helps you enhance your strength.",
    ]}
    typeSpeed={40}
    backSpeed={50}
    loop
  />
</div>

);

export default ReactTypo;
