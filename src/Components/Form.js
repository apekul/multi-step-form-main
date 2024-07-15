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

  // Add-ons data
  const [addOnsData, setAddOnsData] = useState([
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price_monthly: 1,
      price_yearly: 10,
      check: false,
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price_monthly: 2,
      price_yearly: 20,
      check: false,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme of your profile",
      price_monthly: 2,
      price_yearly: 20,
      check: false,
    },
  ]);

  // Current form Step
  const [currentStep, setCurrentStep] = useState(0);

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
        <AddOns
          addOnsData={addOnsData}
          setAddOnsData={setAddOnsData}
          setCurrentStep={setCurrentStep}
          type={planData.type}
        />
      ),
    },
    {
      title: "summary",
      component: (
        <FinishingUp
          setCurrentStep={setCurrentStep}
          personalData={personalData}
          planData={planData}
          addOnsData={addOnsData}
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
          >
            <div
              className={`rounded-full w-[2rem] h-[2rem] flex items-center justify-center font-bold ${
                currentStep === index
                  ? "bg-[#BFE2FD] text-black"
                  : "border text-white"
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
