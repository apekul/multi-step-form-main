import React from "react";
import img from "../../assets/images/icon-thank-you.svg";

const SubmitFinished = () => {
  return (
    <section className="w-auto sm:h-full items-center justify-center flex flex-col pb-16 sm:pb-5 pt-16 sm:pt-10 px-6 sm:px-[4rem] md:px-[6rem] bg-white sm:bg-none m-3 sm:m-0 rounded-xl sm:rounded-none shadow-md sm:shadow-none absolute top-[5.5rem] left-0 right-0 sm:static">
      {/* <section className="h-full flex flex-col pb-5 pt-10 px-[6rem] items-center justify-center "> */}
      <img src={img} alt="thank-you-image" className="w-14 sm:w-20 mb-5" />
      <h1 className="font-bold text-2xl sm:text-3xl text-[#062B57] my-3">
        Thank you!
      </h1>
      <p className="text-[#A1A0A6] text-center text-md">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </section>
  );
};

export default SubmitFinished;
