import React, { useState, useEffect } from "react";
// icons
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

const plans = [
  { name: "Arcade", price_month: 9, price_year: 90, icon: arcade },
  { name: "Advanced", price_month: 12, price_year: 120, icon: advanced },
  { name: "Pro", price_month: 15, price_year: 150, icon: pro },
];

const SelectPlan = ({ planData, setPlanData, setCurrentStep }) => {
  const [type, setType] = useState(planData.type);

  // Update plan data
  const updatePlan = (item) => {
    const price = type === "monthly" ? item.price_month : item.price_year;
    setPlanData({ name: item.name, price, type });
  };

  const toggleType = () => {
    setType((prevType) => (prevType === "monthly" ? "yearly" : "monthly"));
  };

  useEffect(() => {
    // Update the plan with the new type
    const item = plans.find((v) => v.name === planData.name);
    if (item) {
      const price = type === "monthly" ? item.price_month : item.price_year;
      setPlanData((prev) => ({ ...prev, type, price }));
    }
  }, [type, planData.name, setPlanData]);

  return (
    <section className="h-full flex flex-col pb-5 pt-10 px-[6rem]">
      <h1 className="text-[2rem] font-extrabold text-[#02295a]">
        Select your plan
      </h1>
      <p className="text-[1rem]" style={{ color: "hsl(231, 11%, 63%)" }}>
        You have the option of monthly or yearly billing.
      </p>
      <div className="items-start justify-between flex flex-col flex-1">
        <ul className="w-full mt-[2rem] grid grid-flow-row grid-cols-3 gap-5">
          {plans.map((item, index) => (
            <li
              key={index}
              className={`h-auto px-3 pb-3 pt-[1.10rem] border-2 rounded-lg flex flex-col justify-between cursor-pointer  hover:border-[#AFAAD6]
              ${
                item.name === planData.name
                  ? "bg-[#F8F9FE] border-[#AFAAD6]"
                  : "border-gray-300"
              }`}
              onClick={() => updatePlan(item)}
            >
              <img src={item.icon} alt="icon-arcade" className="w-10 h-10" />
              <span className="flex flex-col gap-0.5 mt-[3rem]">
                <p className="text-[#122A50] font-bold">{item.name}</p>
                <p className="text-gray-400 text-sm font-[500]">
                  $
                  {type === "monthly"
                    ? item.price_month + "/mo"
                    : item.price_year + "/yr"}
                </p>
                {type === "yearly" && (
                  <p className="text-[0.8em] font-[500] text-[#02295A]">
                    2 months free
                  </p>
                )}
              </span>
            </li>
          ))}
          {/* Monthly/yearly switch */}
          <div className="flex col-span-3 w-full bg-[#F8F9FE] items-center justify-center gap-5 p-3 rounded-md mt-3">
            <p
              className={`font-bold  select-none ${
                type === "monthly" ? "text-[#02295a]" : "text-gray-400"
              }`}
            >
              Monthly
            </p>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={type === "yearly"}
                onChange={toggleType}
              />
              <div className="relative w-9 h-5 bg-[#062858] rounded-full ">
                <div
                  className={`absolute top-[3px] left-[4px] bg-white border border-gray-300 rounded-full h-3.5 w-3.5 transition-transform ${
                    type === "yearly" ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>

            <p
              className={`font-bold  select-none ${
                type === "yearly" ? "text-[#02295a]" : "text-gray-400"
              }`}
            >
              Yearly
            </p>
          </div>
        </ul>

        {/* buttons */}
        <div className="w-full flex justify-between">
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="font-semibold text-md text-gray-400 hover:text-[#012B5D] duration-150 transition-all"
          >
            Go Back
          </button>
          <button
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className="bg-[#012B5D] text-md font-semibold text-gray-300 py-3 px-5 rounded-lg hover:text-white hover:bg-[#144C85] duration-150 transition-all"
          >
            Next Step
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelectPlan;
