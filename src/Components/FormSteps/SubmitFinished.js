import React from "react";
import img from "../../assets/images/icon-thank-you.svg";

const SubmitFinished = () => {
  return (
    <section className="h-full flex flex-col pb-5 pt-10 px-[6rem] items-center justify-center ">
      <img src={img} alt="thank-you-image" className="w-20 mb-5" />
      <h1 className="font-bold text-3xl text-[#062B57] my-3">Thank you!</h1>
      <p className="text-[#A1A0A6] text-center text-md">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </section>
  );
};

export default SubmitFinished;
