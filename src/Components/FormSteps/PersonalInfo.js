import React, { useState } from "react";

const PersonalInfo = ({ personalData, setPersonalData, setCurrentStep }) => {
  const [name, setName] = useState(personalData.name);
  const [email, setEmail] = useState(personalData.email);
  const [phone, setPhone] = useState(personalData.phone);
  const [errors, setErrors] = useState({});

  const validation = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "This field is required";
    }
    if (!email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(\+\d{2})?\d{9,11}$/.test(phone)) {
      newErrors.phone = "Phone number is not valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validation();
    if (isValid) {
      setPersonalData({ name, email, phone });
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("form is not valid");
    }
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
          <label
            htmlFor="name"
            className="text-[#012B5D] text-md w-full flex justify-between"
          >
            <span>Name</span>
            {errors.name && (
              <span className="text-[#E3334A] text-md font-semibold">
                {errors.name}
              </span>
            )}
          </label>
          <input
            placeholder="e.g. Stephen King"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`font-semibold mb-5 mt-2 p-3 rounded-md w-full outline outline-[1px] text-[#0D2E4F] focus:outline-[#534D95] ${
              errors.name ? "outline-[#E3334A]" : "outline-gray-200"
            }`}
          />
          <label
            htmlFor="email"
            className="text-[#012B5D] text-md w-full flex justify-between"
          >
            <span>Email Address</span>
            {errors.email && (
              <span className="text-[#E3334A] text-md font-semibold">
                {errors.email}
              </span>
            )}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. stephenking@lorem.com"
            className={`font-semibold mb-5 mt-2 p-3 rounded-md w-full outline outline-[1px] text-[#0D2E4F] focus:outline-[#534D95] ${
              errors.email ? "outline-[#E3334A]" : "outline-gray-200"
            }`}
          />
          <label
            htmlFor="phone"
            className="text-[#012B5D] text-md w-full flex justify-between "
          >
            <span>Phone Number</span>
            {errors.phone && (
              <span className="text-[#E3334A] text-md font-semibold">
                {errors.phone}
              </span>
            )}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            // pattern="\+1 \d{3} \d{3} \d{3}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`font-semibold mb-5 mt-2 p-3 rounded-md w-full outline outline-[1px] text-[#0D2E4F] focus:outline-[#534D95] ${
              errors.phone ? "outline-[#E3334A]" : "outline-gray-200"
            }`}
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
