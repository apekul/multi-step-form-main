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
    <section className="w-auto sm:h-full flex flex-col pb-5 pt-6 sm:pt-10 px-6 sm:px-[4rem] md:px-[6rem] bg-white sm:bg-none m-3 sm:m-0 rounded-xl sm:rounded-none shadow-md sm:shadow-none absolute -top-[5.5rem] left-0 right-0 sm:static">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-extrabold text-[#02295a]">
        Pick add-ons
      </h1>
      <p className="sm:text-[1.3rem]" style={{ color: "hsl(231, 11%, 63%)" }}>
        Add-ons help enhance your gaming experience.
      </p>
      <div className="items-start justify-between flex flex-col flex-1">
        {/* checkbox */}
        <ul className="w-full flex flex-col gap-3 sm:gap-4 mt-5 sm:mt-10">
          {addOnsData.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-between w-full px-4 sm:px-6 gap-0 sm:gap-5 h-[4rem] sm:h-[5rem] rounded-lg border hover:border-[#524E9B] cursor-pointer ${
                item.check && "border-[#524E9B] bg-[#F8F9FE]"
              }`}
              onClick={() => updateAddOnsData(item.name)}
            >
              <div className="flex items-center gap-3 sm:gap-5">
                <input
                  type="checkbox"
                  checked={item.check}
                  onChange={() => updateAddOnsData(item.name)}
                  onClick={(event) => event.stopPropagation()}
                  className="w-5 h-5 border-gray-300 rounded accent-[#483EFF] cursor-pointer"
                />
                <span className="w-full">
                  <p className="text-[#102B49] font-bold text-[1rem] sm:text-md">
                    {item.name}
                  </p>
                  <p className="text-[#9B9BA5] text-[0.75rem] sm:text-base">
                    {item.description}
                  </p>
                </span>
              </div>
              {type === "monthly" ? (
                <p className="text-[#4130BD] font-semibold text-sm sm:text-md">
                  +${item.price_monthly}/mo
                </p>
              ) : (
                <p className="text-[#4130BD] font-semibold text-sm sm:text-md">
                  +${item.price_yearly}/yr
                </p>
              )}
            </li>
          ))}
        </ul>
        {/* buttons */}
        <div className="sm:w-full flex justify-between fixed bottom-4 left-4 right-4 sm:static bg-white -m-3 pt-4 p-3 sm:pt-0 sm:-m-0 sm:p-0">
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
