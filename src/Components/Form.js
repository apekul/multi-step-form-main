import React, { useState } from "react";
import bgImage from "../assets/images/bg-sidebar-desktop.svg";

const form = [
  { title: "your info", component: "" },
  { title: "select plan", component: "" },
  { title: "add-ons", component: "" },
  { title: "summary", component: "" },
];

const Form = () => {
  const [formData, setFormData] = useState(); // redux instead?
  const [currentStep, setCurrentStep] = useState(1);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="flex gap-10 bg-white p-4 rounded-xl">
      <ul
        className="flex flex-col p-10 gap-8 bg-cover w-[19rem] h-[40rem] rounded-xl"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {form.map((item, index) => (
          <li
            className="flex gap-5 items-center cursor-pointer"
            onClick={() => setCurrentStep(index + 1)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`rounded-full w-9 h-9 flex items-center justify-center font-bold ${
                currentStep === index + 1
                  ? "bg-[#BFE2FD] text-black"
                  : "border-2 text-white"
              } ${
                hoveredIndex === index &&
                hoveredIndex + 1 !== currentStep &&
                "bg-gray-300 bg-opacity-50"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-white">
              <p
                className="text-sm font-semibold"
                style={{ color: "hsl(228, 100%, 84%)" }}
              >
                STEP {index + 1}
              </p>
              <p className=" font-semibold uppercase">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
      <article className="w-[40rem]">Step {currentStep}</article>
    </section>
  );
};

export default Form;
