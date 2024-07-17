import React, { useState, useEffect } from "react";

const Summary = ({
  setCurrentStep,
  personalData,
  planData,
  addOnsData,
  setSubmited,
}) => {
  // state to hold all data?
  const [totalPrice, setTotalPrice] = useState(0);

  const onSubmit = () => {
    let addons = addOnsData.filter((v) => v.check).map((v) => v.name);
    // submit data
    console.log({
      ...personalData,
      planSelected: planData.name,
      addons,
      type: planData.type,
      totalPrice: totalPrice,
    });
    setSubmited(true);
  };

  useEffect(() => {
    let addons = addOnsData.reduce((acc, curr) => {
      if (curr.check) {
        return (
          acc +
          (planData.type === "monthly" ? curr.price_monthly : curr.price_yearly)
        );
      }
      return acc;
    }, 0);
    setTotalPrice(addons + planData.price);
  }, [planData, addOnsData]);
  return (
    <section className="w-auto sm:h-full flex flex-col pb-3 sm:pb-5 pt-6 sm:pt-10 px-6 sm:px-[4rem] md:px-[6rem] bg-white sm:bg-none m-3 sm:m-0 rounded-xl sm:rounded-none shadow-md sm:shadow-none absolute -top-[5.5rem] left-0 right-0 sm:static">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-extrabold text-[#02295a]">
        Finishing up
      </h1>
      <p className="text-[17px]" style={{ color: "hsl(231, 11%, 63%)" }}>
        Double-check everything looks OK before confirming.
      </p>
      <div className="items-start justify-between flex flex-col flex-1">
        <div className="w-full">
          <ul className="w-full flex flex-col mt-[1rem] sm:mt-[2rem] bg-[#F8F9FE] gap-3 rounded-lg p-4 sm:p-5">
            {/* content */}
            <li className="flex justify-between items-center">
              <span>
                <p className="text-[#1A335B]  font-[800]">
                  {planData.name} ({planData.type})
                </p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="underline text-[#97989D] text-md"
                >
                  Change
                </button>
              </span>
              <p className="text-[#1A335B] font-[800]">
                ${planData.price}/{planData.type === "monthly" ? "mo" : "yr"}
              </p>
            </li>
            <li className="w-full h-[1px] bg-[#E7E8ED] my-0.5 sm:my-2"></li>

            {addOnsData
              .filter((v) => v.check)
              .map((v, i) => (
                <li className="flex w-full justify-between" key={i}>
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
          <div className="flex w-full justify-between items-center p-4 sm:p-5 text-[#97989D]">
            <p className="text-sm sm:text-md">
              Total (per {planData.type === "monthly" ? "month" : "year"})
            </p>
            <p className="text-[#4E3DDB] font-[900] sm:text-xl">
              +${totalPrice}/{planData.type === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        </div>

        {/* buttons */}
        <div className="sm:w-full flex justify-between fixed bottom-4 left-4 right-4 sm:static bg-white -m-3 pt-4 p-3 sm:pt-0 sm:-m-0 sm:p-0">
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="font-semibold text-md text-gray-400 hover:text-[#012B5D] duration-150 transition-all"
          >
            Go Back
          </button>
          <button
            onClick={onSubmit}
            className="bg-[#493EFC] text-md font-semibold text-gray-300 py-3 px-5 rounded-lg hover:text-white hover:bg-[#144C85] duration-150 transition-all"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default Summary;
