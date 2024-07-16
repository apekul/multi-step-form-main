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
                <button
                  onClick={() => setCurrentStep(1)}
                  className="underline text-[#97989D]"
                >
                  Change
                </button>
              </span>
              <p className="text-[#1A335B] font-[800]">
                ${planData.price}/{planData.type === "monthly" ? "mo" : "yr"}
              </p>
            </li>
            <li className="w-full h-[1px] bg-[#E7E8ED] my-2"></li>

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
          <div className="flex w-full justify-between items-center p-5 text-[#97989D]">
            <p>Total (per {planData.type === "monthly" ? "month" : "year"})</p>
            <p className="text-[#4E3DDB] font-[900] text-xl">
              +${totalPrice}/{planData.type === "monthly" ? "mo" : "yr"}
            </p>
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
