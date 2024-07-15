import React from "react";

const FinishingUp = ({
  setCurrentStep,
  personalData,
  planData,
  addOnsData,
}) => {
  // state to hold all data?

  const sumPrice = () => {}; // get whole price mo/yr
  const onSubmit = () => {}; // submit all data
  return (
    <section className="h-full flex flex-col pb-5 pt-10 px-[6rem]">
      <h1 className="text-[2rem] font-extrabold text-[#02295a]">
        Finishing up
      </h1>
      <p className="text-[1rem]" style={{ color: "hsl(231, 11%, 63%)" }}>
        Double-check everything looks OK before confirming.
      </p>
      <div className="items-start justify-between flex flex-col flex-1">
        <div className="w-full">
          <ul className="w-full flex flex-col mt-[2rem] bg-[#F8F9FE] gap-3 rounded-lg p-5">
            {/* content */}
            <li className="flex justify-between items-center">
              <span>
                <p className="text-[#1A335B] font-[800]">
                  {planData.name} ({planData.type})
                </p>
                <p className="underline text-[#97989D]">Change</p>
              </span>
              <p className="text-[#1A335B] font-[800]">
                ${planData.price}/{planData.type.slice(0, 2)}
              </p>
            </li>
            <li className="w-full h-[1px] bg-[#E7E8ED] my-2"></li>

            {addOnsData
              .filter((v) => v.check)
              .map((v, i) => (
                <li className="flex w-full justify-between ">
                  <p className="text-[#97989D] text-sm">{v.name}</p>
                  <p className="text-[#1A335B] font-[800] text-sm">
                    $
                    {planData.type === "monthly"
                      ? v.price_monthly
                      : v.price_yearly}
                    /{planData.type === "monthly" ? "mo" : "yr"}
                  </p>
                </li>
              ))}
          </ul>
          <div className="flex w-full justify-between items-center p-5 text-[#97989D]">
            <p>Total (per month)</p>
            <p className="text-[#4E3DDB] font-[900] text-xl">+$12/mo</p>
          </div>
        </div>

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
            className="bg-[#493EFC] text-md font-semibold text-gray-300 py-3 px-5 rounded-lg hover:text-white hover:bg-[#144C85] duration-150 transition-all"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinishingUp;
