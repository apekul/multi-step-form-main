import React, { useState } from "react";
import bgImage from "../assets/images/bg-sidebar-desktop.svg";
import AddOns from "./FormSteps/AddOns";
import PersonalInfo from "./FormSteps/PersonalInfo";
import SelectPlan from "./FormSteps/SelectPlan";
import FinishingUp from "./FormSteps/FinishingUp";

const Form = () => {
  // Use Redux instead? also hold the data in localStorage to prevent data after refresh

  // Personal Info data
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // Plan data
  const [planData, setPlanData] = useState({
    name: "Arcade",
    price: 9,
    type: "monthly",
  });
  const [addOnsData, setAddOnsData] = useState({});
  const [summaryData, setSummaryData] = useState({});

  // Current form Step
  const [currentStep, setCurrentStep] = useState(1);
  // Index hover
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Form data for each step
  const form = [
    {
      title: "your info",
      component: (
        <PersonalInfo
          personalData={personalData}
          setPersonalData={setPersonalData}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
    {
      title: "select plan",
      component: (
        <SelectPlan
          planData={planData}
          setPlanData={setPlanData}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
    {
      title: "add-ons",
      component: (
        <AddOns addOnsData={addOnsData} setAddOnsData={setAddOnsData} />
      ),
    },
    {
      title: "summary",
      component: (
        <FinishingUp
          summaryData={summaryData}
          setSummaryData={setSummaryData}
        />
      ),
    },
  ];

  return (
    <section className="flex  bg-white p-4 rounded-xl">
      <ul
        className="flex flex-col px-8 py-9 gap-6 bg-cover w-[17rem] h-[36rem] rounded-xl"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {form.map((item, index) => (
          <li
            key={index}
            className="flex gap-4 items-center cursor-pointer"
            onClick={() => setCurrentStep(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`rounded-full w-[2rem] h-[2rem] flex items-center justify-center font-bold ${
                currentStep === index
                  ? "bg-[#BFE2FD] text-black"
                  : "border text-white"
              } ${
                hoveredIndex === index &&
                hoveredIndex !== currentStep &&
                "bg-gray-300 bg-opacity-50"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-white">
              <p className="text-xs text-gray-400">STEP {index + 1}</p>
              <p className="font-[500] text-md uppercase">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-[40rem]">{form[currentStep].component}</div>
    </section>
  );
};

export default Form;
