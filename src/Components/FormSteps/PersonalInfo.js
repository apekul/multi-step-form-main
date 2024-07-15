import React from "react";

const PersonalInfo = ({ personalData, setPersonalData, setCurrentStep }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <section className="h-full flex flex-col pb-5 pt-10 px-[6rem]">
      <h1 className="text-[2rem] font-extrabold text-[#02295a]">
        Personal info
      </h1>
      <p className="text-[1rem]" style={{ color: "hsl(231, 11%, 63%)" }}>
        Please provide your name, email address, and phone number.
      </p>
      <form
        onSubmit={handleSubmit}
        className="items-start justify-between flex flex-col flex-1"
      >
        <div className="w-full pt-[2rem]">
          <label htmlFor="name" className="text-[#012B5D] text-md font-[500]">
            Name
          </label>
          <input
            placeholder="e.g. Stephen King"
            type="text"
            id="name"
            name="name"
            value={personalData.name}
            onChange={handleChange}
            required
            className="font-semibold mb-5 mt-2 p-3 rounded-md w-full outline outline-[2px] outline-gray-200"
          />
          <label htmlFor="email" className="text-[#012B5D] text-md font-[500]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalData.email}
            onChange={handleChange}
            required
            placeholder="e.g. stephenking@lorem.com"
            className="font-semibold mb-5 mt-2 p-3 rounded-md w-full outline outline-[2px] outline-gray-200"
          />
          <label htmlFor="phone" className="text-[#012B5D] text-md font-[500]">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            // pattern="\+1 \d{3} \d{3} \d{3}"
            minLength="9"
            maxLength="12"
            value={personalData.phone}
            onChange={handleChange}
            required
            className="font-semibold mb-5 mt-2 p-3 rounded-md w-full outline outline-[2px] outline-gray-200"
          />
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-[#012B5D] text-md font-semibold text-gray-300 py-3 px-5 rounded-lg hover:text-white hover:bg-[#144C85] duration-150 transition-all"
          >
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
