import React from "react";

const AddOns = ({ addOnsData, setAddOnsData, setCurrentStep, type }) => {
  const updateAddOnsData = (itemName) => {
    setAddOnsData((prevAddOnsData) =>
      prevAddOnsData.map((item) =>
        item.name === itemName ? { ...item, check: !item.check } : item
      )
    );
  };

  return (
    <section className="h-full flex flex-col pb-5 pt-10 px-[6rem] select-none">
      <h1 className="text-[2rem] font-extrabold text-[#02295a]">
        Pick add-ons
      </h1>
      <p className="text-[1rem]" style={{ color: "hsl(231, 11%, 63%)" }}>
        Add-ons help enhance your gaming experience.
      </p>
      <div className="items-start justify-between flex flex-col flex-1">
        {/* checkbox */}
        <ul className="w-full flex flex-col gap-4 mt-10">
          {addOnsData.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-between w-full px-6 gap-5 h-[5rem] rounded-lg border hover:border-[#524E9B] cursor-pointer ${
                item.check && "border-[#524E9B] bg-[#F8F9FE]"
              }`}
              onClick={() => updateAddOnsData(item.name)}
            >
              <div className="flex items-center gap-5">
                <input
                  type="checkbox"
                  checked={item.check}
                  onChange={() => updateAddOnsData(item.name)}
                  onClick={(event) => event.stopPropagation()}
                  className="w-5 h-5 border-gray-300 rounded accent-[#483EFF] cursor-pointer"
                />
                <span>
                  <p className="text-[#0C2446] font-bold text-md">
                    {item.name}
                  </p>
                  <p className="text-[#9B9BA5]">{item.description}</p>
                </span>
              </div>
              {type === "monthly" ? (
                <p className="text-[#4130BD] font-semibold text-md">
                  +${item.price_monthly}/mo
                </p>
              ) : (
                <p className="text-[#4130BD] font-semibold text-md">
                  +${item.price_yearly}/yr
                </p>
              )}
            </li>
          ))}
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

export default AddOns;
