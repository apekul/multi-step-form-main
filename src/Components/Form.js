import React, { useState } from "react";
import AddOns from "./FormSteps/AddOns";
import PersonalInfo from "./FormSteps/PersonalInfo";
import SelectPlan from "./FormSteps/SelectPlan";
import Summary from "./FormSteps/Summary";
import SubmitFinished from "./FormSteps/SubmitFinished";

const Form = () => {
  const [submited, setSubmited] = useState(false);
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
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price_monthly: 2,
      price_yearly: 20,
      check: false,
    },
    {
      name: "Customizable profile",
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
        <Summary
          setCurrentStep={setCurrentStep}
          personalData={personalData}
          planData={planData}
          addOnsData={addOnsData}
          setSubmited={setSubmited}
        />
      ),
    },
  ];

  return (
    <section className="w-full sm:w-auto flex flex-col sm:flex-row sm:bg-white sm:p-4 sm:rounded-xl select-none">
      <ul className="bg-mobile sm:bg-desktop flex items-start justify-center sm:justify-start sm:flex-col px-8 py-8 gap-6 bg-cover sm:w-[17rem] w-full h-[11rem] sm:h-[36rem] sm:rounded-xl bg-center">
        {form.map((item, index) => (
          <li key={index} className="flex gap-4 items-center">
            <div
              className={`rounded-full w-[2rem] h-[2rem] flex items-center justify-center font-bold ${
                currentStep === index
                  ? "bg-[#BFE2FD] text-black"
                  : "border text-white"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-white hidden sm:block">
              <p className="text-xs text-gray-400">STEP {index + 1}</p>
              <p className="font-[500] text-md uppercase ">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
      {submited ? (
        <div className="w-[40rem]">
          <SubmitFinished />
        </div>
      ) : (
        <div
          className={`w-full md:w-[40rem] sm:h-full relative bg-[#EEF5FF] ${
            planData.type === "yearly" && currentStep === 1 && "h-[35rem]"
          }`}
        >
          {form[currentStep].component}
        </div>
      )}
    </section>
  );
};

export default Form;
